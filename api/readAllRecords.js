/**
 * Created by icapa on 25/10/16.
 */
var api = {
    get: function (req, res, next) {
        var context = req.azureMobile;

        context.tables('AuthorPosts')
            .orderBy('updatedAt')
            .read()
            .then(results => res.json(results))
            .catch(next)

    }

};

api.get.access = 'anonymous';
module.exports = api;