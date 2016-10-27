/**
 * Created by icapa on 26/10/16.
 */
var api = {
    post: function (req, res, next) {

        // chequear parametros



        var title = req.query.title;
        var author = req.query.author;
        var texto = req.query.text;




        /*
        console.log('---- LOS PARAMETROS -----');
        console.log('Tituloooo :'+title);
        console.log('Authorrrr:' + author);
        console.log('Textxxxx:'+texto);
        console.log('---- LOS PARAMETROS -----');
        console.log('---- LOS PARAMETROS -----');
        console.log('Tituloooo :'+title1);
        console.log('Authorrrr:' + author1);
        console.log('Textxxxx:'+texto1);
        console.log('---- LOS PARAMETROS -----');
        console.log('---- LOS PARAMETROS -----');
        console.log('Tituloooo :'+title2);
        console.log('Authorrrr:' + author2);
        console.log('Textxxxx:'+texto2);
        console.log('---- LOS PARAMETROS -----');
        console.log('---- EL PUTO BODY ENTERO ----');
        console.log(req.body);
        console.log(typeof(req.body));
        console.log(req.params.title);
        console.log(req.param('title'));
        */

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