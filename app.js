/**
 * Created by icapa on 25/10/16.
 */

var express = require("express"),
    azuremobileapps = require("azure-mobile-apps");

var app = express(),
    mobile = azuremobileapps();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));


app.use(express.json());
app.use(express.urlencoded());

mobile.tables.import("./tables");

mobile.api.import("./api");

app.use(mobile);

app.listen(process.env.PORT || 3000);
