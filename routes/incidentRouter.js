let express = require('express');
let router = require('./router.js');
let cors = require('cors');
let app = express();

let jsonParsingMiddleware = express.json();
app.use(cors);
app.use(jsonParsingMiddleware);
app.use(router);

module.exports = app;
