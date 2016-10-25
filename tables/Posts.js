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
     "title": "String",
     "text": "String",
     "photo": "String",
     "latitude": "Double",
     "longitude": "Double",
     "author": "String",
     "status": "Bool",
     "rate": "Double",
     "available": "Bool",
     "containerName": "String"
};

/*
Permisos de acceso a la tabla
 */

table.read.access = 'anonymous';
table.update.access = 'disabled';
table.insert.access = 'anonymous';

module.exports = table;


