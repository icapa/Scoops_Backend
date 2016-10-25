/**
 * Created by icapa on 25/10/16.
 */

var express = require("express"),
    azuremobileapps = require("azure-mobile-apps");


var app = express(),
    mobile = azuremobileapps();

mobile.tables.add("./tables");
mobile.api.add("./api");

app.use(mobile);

app.listen(process.env.PORT || 3000);

