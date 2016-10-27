/**
 * Created by icapa on 26/10/16.
 */
var api = {
    post: function (req, res, next) {

        // chequear parametros

        var title = req.params.title;
        var author = req.params.author;
        var text = req.params.text;


        var context = req.azureMobile;

        var user = context.user.id;

        /*
         var query = {
             sql: "INSERT INTO Posts (title) VALUES ('hola')"
         };



         req.azureMobile.data.execute(query)
         .then(function (result) {
            res.json(result);
         });
        */
        var item = {
            rate: 0.0,
            numRates : 0,
            published: false,
            wantPublish: false,
            photo:'',
            title : title,
            author: author,
            text: text,
            userId : user
        };

        context.tables('AuthorPosts')
            .insert(item)
            .then(() => res.status(200).json(req.body))
            .catch(next);



    }

};

api.post.access = 'authenticated';
module.exports = api;