/**
 * Created by icapa on 26/10/16.
 */
var api = {
    post: function (req, res, next) {

        // chequear parametros
        /*
        if (typeof req.params.length < 0) {
            return next();
        }
        */

        //var context = req.azureMobile;
        //var user = context.user.id;
        /*
         var query = {
         sql: "Select * FROM Autors"
         };

         req.azureMobile.data.execute(query)
         .then(function (result) {
         res.json(result);
         });
         */
        var result = {"usuario" : "prueba"};
        res.json(result);
    }

};

api.post.access = 'anonymous';
module.exports = api;