/**
 * Created by icapa on 27/10/16.
 */
var api = {
    get: function (req, res, next) {

        // chequear parametros
        if (typeof req.params.length < 0) {
            return next();
        }
        var publicada = req.query.publish;
        console.log('---- PARAMETROS TODOS ----');
        console.log('Paramatros: '+ req.query.publicada);

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

    }

};

api.get.access = 'anonymous';
module.exports = api;