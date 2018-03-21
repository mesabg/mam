// Angular requires Zone.js
require('zone.js/dist/zone-node');

const express = require('express');
const ngExpressEngine = require('@nguniversal/express-engine').ngExpressEngine;
const expressStaticGzip = require("express-static-gzip");

const {
    AppServerModuleNgFactory,
    LAZY_MODULE_MAP
} = require(`./dist-server/main.bundle`);

const app = express(); 

const {
    provideModuleMap
} = require('@nguniversal/module-map-ngfactory-loader');

const provider = provideModuleMap(LAZY_MODULE_MAP);

app.engine(
    'html',
    ngExpressEngine({
        bootstrap: AppServerModuleNgFactory,
        providers: [provider]
    })
);

app.set('view engine', 'html');
app.set('views', __dirname);

app.use(expressStaticGzip(__dirname + '/assets'));
app.use(expressStaticGzip(__dirname + '/dist'));

app.get('/*', (req, res) => {
    console.time(`GET: ${req.originalUrl}`);
    res.render('./dist/index', {
        req: req,
        res: res
    });
    console.timeEnd(`GET: ${req.originalUrl}`);
});

app.set('port', process.env.PORT || 8080);
app.listen(app.get('port'), () => {
    console.log("Server is now running on port [%s]", app.get('port'));
});