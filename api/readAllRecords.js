/**
 * Created by icapa on 25/10/16.
 */
var api = {
    get: function (req,res,next){
        // Chequear parametros
        if (typeof req.params.length <0){
            return next();
        }
        var context = req.azureMobile;
        var user = context.user.id;
        console.log('User: ', user);
        var query = {
            sql: "Select * FROM Posts"
        };

        req.azureMobile.data.execute(query)
            .then(function(result){
                res.json(result);
            });
    }
};

/*api.get.access = 'anonymous';
module.exports = api;*/
module.exports = api;