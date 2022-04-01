let express = require('express');
let router = require('./router.js');

let app = express();

let jsonParsingMiddleware = express.json();
app.use(jsonParsingMiddleware);
app.use(router);

module.exports = app;
