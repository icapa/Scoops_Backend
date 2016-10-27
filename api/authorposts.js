/**
 * Created by icapa on 27/10/16.
 */
var api = {
    get: function (req, res, next) {

        // chequear parametros
        if (typeof req.params.length < 0) {
            return next();
        }
        var publicada = req.params.publish
        
        var context = req.azureMobile;
        //var user = context.user.id;
        var user = 'sid:d88065d9dbcb66c21c4cc0de8ad05fe0';
        console.log('------- GET PARMS --------');
        console.log('Publicada: ' + publicada);
        console.log('UserId:' + user);

        context.tables('AuthorPosts')
            .where ({userId: user})
            .read()
            .then(results => res.json(results))
            .catch(next)

        /*
         var query = {
            sql: "Select * FROM AuthorPosts where userId=@userId",
            params: {userId : user}
         };

         req.azureMobile.data.execute(query)
         .then(function (result) {
            res.json(result);
            })
         .catch(next);

        */

    }

};

api.get.access = 'anonymous';
module.exports = api;