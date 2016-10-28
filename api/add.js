/**
 * Created by icapa on 26/10/16.
 */
var api = {
    post: function (req, res, next) {

        // chequear parametros



        var title = req.query.title;
        var author = req.query.author;
        var texto = req.query.text;

        var photo = req.query.photo;

        var context = req.azureMobile;

        var user = context.user.id;

        var item = {
            rate: 0.0,
            numRates : 0,
            published: false,
            wantPublish: false,
            photo: photo,
            title : title,
            author: author,
            text: texto,
            userId : user
        };

        context.tables('AuthorPosts')
            .insert(item)
            .then(() => res.status(200).json({status: 'OK'}))
            .catch(next);

    }

};

api.post.access = 'authenticated';
module.exports = api;