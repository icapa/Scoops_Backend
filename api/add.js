/**
 * Created by icapa on 26/10/16.
 */
var api = {
    post: function (req, res, next) {

        // chequear parametros

        var title = req.body.title;
        var author = req.body.author;
        var text = req.body.text;


        var context = req.azureMobile;


        //var user = context.user.id;
        var user = 'anonymous';


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
            .then(() => res.status(200).json({mierda: req.param('title')}))
            .catch(next);



    }

};

api.post.access = 'anonymous';
module.exports = api;