//-- Global modules
const fs = require('fs');
const path = require('path');

//-- Webpack configurations
const webpackMerge = require('webpack-merge');
const webpackConfig = require('angular-webpack-config');

//-- Webpack plugins
const ConcatPlugin = require('webpack-concat-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlElementsWebpackPlugin = require('html-elements-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssUrl = require('postcss-url');
const cssnano = require('cssnano');
const CompressionPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

//-- Webpack compile plugins
const { NoEmitOnErrorsPlugin, SourceMapDevToolPlugin, NamedModulesPlugin } = require('webpack');
const { InsertConcatAssetsWebpackPlugin, NamedLazyChunksWebpackPlugin, BaseHrefWebpackPlugin } = require('@angular/cli/plugins/webpack');
const { CommonsChunkPlugin } = require('webpack').optimize;
const { AotPlugin } = require('@ngtools/webpack');

//-- Global options
const entryPoints = ["inline","polyfills","sw-register","styles","vendor","main"];
const minimizeCss = false;
const baseHref = "/";
const deployUrl = "";

//-- Paths declaration
const nodeModules = path.join(process.cwd(), 'node_modules');
const realNodeModules = fs.realpathSync(nodeModules);
const clientBase = path.join(process.cwd(), 'src\\client');
const genDirNodeModules = path.join(process.cwd(), 'src', '$$_gendir', 'node_modules');
const stylesPath = [
	path.join(clientBase, "assets\\fonts\\loader.scss"),
	path.join(clientBase, "styles.scss"),
	path.join(nodeModules, "tether\\dist\\css\\tether.min.css"),
	path.join(nodeModules, "bootstrap\\dist\\css\\bootstrap.min.css"),
	path.join(nodeModules, "slick-carousel\\slick\\slick.css"),
	path.join(nodeModules, "slick-carousel\\slick\\slick-theme.css"),
	path.join(nodeModules, "font-awesome\\css\\font-awesome.css")
];

const scriptsPath = [
	path.join(nodeModules, "jquery\\dist\\jquery.min.js"),
	path.join(nodeModules, "tether\\dist\\js\\tether.min.js"),
	path.join(nodeModules, "bootstrap\\dist\\js\\bootstrap.min.js"),
	path.join(nodeModules, "slick-carousel\\slick\\slick.min.js")
];

//-- Global Postcss configuration
const postcssPlugins = function () {
	// safe settings based on: https://github.com/ben-eb/cssnano/issues/358#issuecomment-283696193
	const importantCommentRe = /@preserve|@license|[@#]\s*source(?:Mapping)?URL|^!/i;
	const minimizeOptions = {
		autoprefixer: false,
		safe: true,
		mergeLonghand: false,
		discardComments: { remove: (comment) => !importantCommentRe.test(comment) }
	};
	return [
		postcssUrl(
			{
				url: (URL) => {
					// Only convert root relative URLs, which CSS-Loader won't process into require().
					if (!URL.startsWith('/') || URL.startsWith('//')) return URL;

					// If deployUrl contains a scheme, ignore baseHref use deployUrl as is.
					if (deployUrl.match(/:\/\//)) return `${deployUrl.replace(/\/$/, '')}${URL}`;
					
					// If baseHref contains a scheme, include it as is.
					else if (baseHref.match(/:\/\//)) return baseHref.replace(/\/$/, '') + `/${deployUrl}/${URL}`.replace(/\/\/+/g, '/');
					
					// Join together base-href, deploy-url and the original URL.
					// Also dedupe multiple slashes into single ones.
					else return `/${baseHref}/${deployUrl}/${URL}`.replace(/\/\/+/g, '/');
				}
			}
		),autoprefixer(),
    ].concat(minimizeCss ? [cssnano(minimizeOptions)] : []);
};


/**
 * Production Configuration
 */
const browserConfig = function(root, settings) {
	return {
		module: {
			rules: [
				{
					test: /\.css$/,
					use: ['raw-loader', 'css-loader'],
					include: root('node_modules')
				}
			]
		},
		plugins: [
			new CopyWebpackPlugin([
				{
					from: `${root(settings.paths.src.client.assets.root)}/config.local.json`,
					to: './config.local.json'
				},
				{
					from: `${root(settings.paths.src.client.assets.root)}/i18n/en.json`,
					to: './i18n/en.json'
				},
				{
					from: `${root(settings.paths.src.client.assets.root)}/i18n/tr.json`,
					to: './i18n/tr.json'
				}
			])
		]
	};
};
  
const prodConfig = function(mangle = true) {
	return {
		plugins: [
			new UglifyJsPlugin({
				uglifyOptions: {
					ecma: 6,
					mangle
				}
			})
		]
	};
};

const browserConfig_ = function(root, settings){
	return {
		"resolve": {
			"extensions": [".ts", ".js"],
			"modules": [nodeModules, nodeModules],
			"symlinks": true,
			"alias": {}
		},
		"resolveLoader": {
			"modules": [nodeModules, nodeModules]
		},
		"entry": {
			"main": [path.join(clientBase, 'main.ts')],
			"polyfills": [path.join(clientBase, 'polyfills.ts')],
			"styles": stylesPath
		},
		"module": {
			"rules": [
				{
					"enforce": "pre",
					"test": /\.js$/,
					"loader": "source-map-loader",
					"exclude": [/(\\|\/)node_modules(\\|\/)/]
				},
				{
					"test": /\.html$/,
					"use": ["raw-loader"]
				},
				{
					"test": /\.(eot|svg|cur)$/,
					"loader": "file-loader",
					"options": {
						"name": "[name].[hash:20].[ext]",
						"limit": 10000
					}
				},
				{
					"test": /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,
					"loader": "url-loader",
					"options": {
						"name": "[name].[hash:20].[ext]",
						"limit": 10000
					}
				},
				{
					"exclude": stylesPath,
					"test": /\.css$/,
					"use": [
						"exports-loader?module.exports.toString()",
						{
							"loader": "css-loader",
							"options": {
								"sourceMap": false,
								"importLoaders": 1
							}
						},
						{
							"loader": "postcss-loader",
							"options": {
								"ident": "postcss",
								"plugins": postcssPlugins
							}
						}
					]
				},
				{
					"exclude": stylesPath,
					"test": /\.scss$|\.sass$/,
					"use": [
						"exports-loader?module.exports.toString()",
						{
							"loader": "css-loader",
							"options": {
								"sourceMap": false,
								"importLoaders": 1
							}
						},
						{
							"loader": "postcss-loader",
							"options": {
								"ident": "postcss",
								"plugins": postcssPlugins
							}
						},
						{
							"loader": "sass-loader",
							"options": {
								"sourceMap": false,
								"precision": 8,
								"includePaths": []
							}
						}
					]
				},
				{
					"exclude": stylesPath,
					"test": /\.less$/,
					"use": [
						"exports-loader?module.exports.toString()",
						{
							"loader": "css-loader",
							"options": {
								"sourceMap": false,
								"importLoaders": 1
							}
						},
						{
							"loader": "postcss-loader",
							"options": {
								"ident": "postcss",
								"plugins": postcssPlugins
							}
						},
						{
							"loader": "less-loader",
							"options": {
								"sourceMap": false
							}
						}
					]
				},
				{
					"exclude": stylesPath,
					"test": /\.styl$/,
					"use": [
						"exports-loader?module.exports.toString()",
						{
							"loader": "css-loader",
							"options": {
								"sourceMap": false,
								"importLoaders": 1
							}
						},
						{
							"loader": "postcss-loader",
							"options": {
								"ident": "postcss",
								"plugins": postcssPlugins
							}
						},
						{
							"loader": "stylus-loader",
							"options": {
								"sourceMap": false,
								"paths": []
							}
						}
					]
				},
				{
					"include": stylesPath,
					"test": /\.css$/,
					"use": [
						"style-loader",
						{
							"loader": "css-loader",
							"options": {
								"sourceMap": false,
								"importLoaders": 1
							}
						},
						{
							"loader": "postcss-loader",
							"options": {
								"ident": "postcss",
								"plugins": postcssPlugins
							}
						}
					]
				},
				{
					"include": stylesPath,
					"test": /\.scss$|\.sass$/,
					"use": [
						"style-loader",
						{
							"loader": "css-loader",
							"options": {
								"sourceMap": false,
								"importLoaders": 1
							}
						},
						{
							"loader": "postcss-loader",
							"options": {
								"ident": "postcss",
								"plugins": postcssPlugins
							}
						},
						{
							"loader": "sass-loader",
							"options": {
								"sourceMap": false,
								"precision": 8,
								"includePaths": []
							}
						}
					]
				},
				{
					"include": stylesPath,
					"test": /\.less$/,
					"use": [
						"style-loader",
						{
							"loader": "css-loader",
							"options": {
								"sourceMap": false,
								"importLoaders": 1
							}
						},
						{
							"loader": "postcss-loader",
							"options": {
								"ident": "postcss",
								"plugins": postcssPlugins
							}
						},
						{
							"loader": "less-loader",
							"options": {
								"sourceMap": false
							}
						}
					]
				},
				{
					"include": stylesPath,
					"test": /\.styl$/,
					"use": [
						"style-loader",
						{
							"loader": "css-loader",
							"options": {
								"sourceMap": false,
								"importLoaders": 1
							}
						},
						{
							"loader": "postcss-loader",
							"options": {
								"ident": "postcss",
								"plugins": postcssPlugins
							}
						},
						{
							"loader": "stylus-loader",
							"options": {
								"sourceMap": false,
								"paths": []
							}
						}
					]
				},
				{
					"test": /\.ts$/,
					"use": [
						"@ngtools/webpack"
					]
				}
			]
		},
		"plugins": [
			new NoEmitOnErrorsPlugin(),
			new ConcatPlugin({
				"uglify": false,
				"sourceMap": true,
				"name": "scripts",
				"fileName": "[name].bundle.js",
				"filesToConcat": scriptsPath
			}),
		  	new CopyWebpackPlugin([
				{
					"context": clientBase,
					"to": "",
					"from": {
						"glob": "assets/**/*",
						"dot": true
					}
				},
				{
					"context": clientBase,
					"to": "",
					"from": {
						"glob": "favicon.ico",
						"dot": true
					}
				}
		  	], {
				"ignore": [
					".gitkeep"
				],
				"debug": "warning"
			}),
			new ProgressPlugin(),
			new CircularDependencyPlugin({
				"exclude": /(\\|\/)node_modules(\\|\/)/,
				"failOnError": false
			}),
			new NamedLazyChunksWebpackPlugin(),
		  	new HtmlWebpackPlugin({
				"template": path.join(clientBase, "index.html"),
				"filename": "./index.html",
				"hash": false,
				"inject": true,
				"compile": true,
				"favicon": false,
				"minify": false,
				"cache": true,
				"showErrors": true,
				"chunks": "all",
				"excludeChunks": [],
				"title": "Webpack App",
				"xhtml": true,
				"chunksSortMode": function sort(left, right) {
					let leftIndex = entryPoints.indexOf(left.names[0]);
					let rightindex = entryPoints.indexOf(right.names[0]);
					if (leftIndex > rightindex) return 1;
					else if (leftIndex < rightindex) return -1;
					else return 0;
				}
			}),
			new BaseHrefWebpackPlugin({
				"baseHref": baseHref
			}),
			new CommonsChunkPlugin({
				"name": ["inline"],
				"minChunks": null
			}),
			new CommonsChunkPlugin({
				"name": ["vendor"],
				"minChunks": (module) => {
					return module.resource
						&& (module.resource.startsWith(nodeModules)
							|| module.resource.startsWith(genDirNodeModules)
							|| module.resource.startsWith(realNodeModules));
				},
				"chunks": ["main"]
			}),
			new SourceMapDevToolPlugin({
				"filename": "[file].map[query]",
				"moduleFilenameTemplate": "[resource-path]",
				"fallbackModuleFilenameTemplate": "[resource-path]?[hash]",
				"sourceRoot": "webpack:///"
			}),
			new CommonsChunkPlugin({
				"name": ["main"],
				"minChunks": 2,
				"async": "common"
			}),
			new NamedModulesPlugin({}),
			/*new AotPlugin({
				"mainPath": "main.ts",
				"replaceExport": false,
				"hostReplacementPaths": {
					"environments\\environment.ts": "environments\\environment.prod.ts"
				},
				"exclude": [],
				"tsConfigPath": path.join(clientBase, "tsconfig.app.json")
			}),*/
			new CompressionPlugin({
				"asset": "[path].gz[query]",
				"algorithm": "gzip",
				"test": /\.js$|\.css$|\.html$/,
				"threshold": 10240,
				"minRatio": 0.8
			})
		],
		"node": {
			"fs": "empty",
			"global": true,
			"crypto": "empty",
			"tls": "empty",
			"net": "empty",
			"process": true,
			"module": false,
			"clearImmediate": false,
			"setImmediate": false
		},
		"devServer": {
			"historyApiFallback": true
		}
	};
}


const prodConfig_ = function(){
	return {};
}


module.exports = function(options, root, settings) {
	switch (options.env) {
		case 'prod':
		case 'production':
			return options.mode === 'stage' || options.mode === 'staging' 
				? !!options.platform
					? options.platform === 'server'
						? webpackMerge(webpackConfig.universal.server.prod(root, settings))
						: webpackMerge(webpackConfig.universal.browser.prod(root, settings), browserConfig(root, settings))
						: webpackMerge(webpackConfig.spa.prod(root, settings), browserConfig(root, settings))
        		: !!options.platform
          			? options.platform === 'server'
            			? webpackMerge(webpackConfig.universal.server.prod(root, settings), prodConfig(false))
            			: webpackMerge(webpackConfig.universal.browser.prod(root, settings), browserConfig(root, settings), prodConfig())
						: webpackMerge(webpackConfig.spa.prod(root, settings), browserConfig(root, settings), prodConfig());
						  
		case 'dev':
		case 'development':
			return !!options.platform
				? options.platform === 'server'
					? webpackConfig.universal.server.dev(root, settings)
					: webpackMerge(webpackConfig.universal.browser.dev(root, settings), browserConfig(root, settings))
					: options.hmr
					? webpackMerge(webpackConfig.spa.hmr(root, settings), browserConfig(root, settings))
					: webpackMerge(webpackConfig.spa.dev(root, settings), browserConfig(root, settings));
	};
};