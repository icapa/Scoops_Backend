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
        /*let name = req.body.usuario*/
        var name = req.body.usuario;
        res.json({ "usuario" : name });

    }

};

api.post.access = 'anonymous';
module.exports = api;