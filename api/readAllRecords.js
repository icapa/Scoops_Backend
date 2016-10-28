/**
 * Created by icapa on 25/10/16.
 */
var api = {
    get: function (req, res, next) {

        context.tables('AuthorPosts')
            .read()
            .then(results => res.json(results))
            .catch(next)

    }

};

api.get.access = 'anonymous';
module.exports = api;