/**
 * Created by icapa on 25/10/16.
 */
var api = {
    get: function (req, res, next) {

        // chequear parametros
        if (typeof req.params.length < 0) {
            return next();
        }

        var context = req.azureMobile;
        var user = context.user.id;

        var query = {
            sql: "Select * FROM Autors"
        };

        req.azureMobile.data.execute(query)
            .then(function (result) {
                res.json(result);
            });
    }

};

api.get.access = 'anonymous';
module.exports = api;