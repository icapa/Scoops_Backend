/**
 * Created by icapa on 25/10/16.
 */



var azureMobileApps = require('azure-mobile-apps');

var table = azureMobileApps.table();



table.columns = {
     "title": "string",
     "text": "string",
     "photo": "string",
     "latitude": "number",
     "longitude": "number",
     "author": "string",
     "published": "boolean",
     "rate": "number",
     "wantPublish": "boolean",
     "containerName": "string",
     "numberRates" : "number"
};

/*
Permisos de acceso a la tabla
 */

table.read.access = 'anonymous';
table.update.access = 'anonymous';
table.insert.access = 'anonymous';

module.exports = table;



