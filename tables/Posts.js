/**
 * Created by icapa on 25/10/16.
 */

/*
 struct Post {

 let title: String
 let text: String
 var photo: String
 var latitude: Double
 var longitude: Double
 let author: String
 var status: Bool
 var rate: Double
 var available: Bool
 var containerName: String

 }
 */


var azureMobileApps = require("azure-mobile-apps");

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



