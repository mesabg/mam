module.exports = {
  "quick": true,
  "debug": true,
  "host": "localhost",
  "port": {
    "browser": 3000,
    "server": 8000
  },
  "root": ".",
  "paths": {
    "src": {
      "root": "{{root}}/src",
      "client": {
        "root": "{{src_root}}/client",
        "app": {
          "root": "{{src_client_root}}/app"
        },
        "assets": {
          "root": "{{src_client_root}}/assets",
          "sass": "{{src_assets_root}}/sass"
        }
      },
      "server": {
        "root": "{{src_root}}/server",
        "app": "{{src_server_root}}/app"
      }
    },
    "tools" : {
      "root": "{{root}}/tools",
      "build": "{{tools_root}}/build",
      "config": "{{tools_root}}/config",
      "test": "{{tools_root}}/test"
    },
    "public": {
      "root": "{{root}}/public",
      "assets": {
        "root": "{{public_root}}/assets"
      }
    },
    "server": "{{root}}/.server",
    "temp": "{{root}}/.temp"
  },
  "publicPaths": {
    "assets": "assets/"
  },
  "plugins": {
    "pluginloader": {
      "pattern": [
        "gulp-*",
        "async",
        "rimraf",
        "webpack",
        "postcss-*",
        "autoprefixer",
        "colorguard",
        "stylefmt"
      ],
      "rename": {
        "postcss-scss": "scss",
        "postcss-reporter": "reporter"
      }
    },
    "debugger": {
      "title": ""
    },
    "autoprefixer": {
      "browsers": [
        "last 2 versions",
        "> 5%",
        "Firefox ESR"
      ]
    }
  },
  "webpack": {
    "devtool": {
      "DEV": "cheap-module-source-map",
      "PROD": "source-map",
      "TEST": "inline-source-map"
    },
    "bundles": {
      "polyfills": [
        "core-js",
        {
          "name": "zone.js",
          "path": "zone.js/dist/zone.js"
        },
        {
          "name": "zone.js",
          "path": "zone.js/dist/long-stack-trace-zone.js"
        }
      ],
      "server": [
        "express",
        "debug",
        "compression",
        "morgan",
        "body-parser"
      ]
    }
  }
};
