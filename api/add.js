/**
 * Created by icapa on 26/10/16.
 */
var api = {
    post: function (req, res, next) {

        // chequear parametros

        var title = req.body.title;
        var author = req.body.author;
        var text = req.body.text;


        //var context = req.azureMobile;
        //var user = context.user.id;


        
         var query = {
             sql: 'INSERT INTO Posts title=@title',
             parameters : [
                 {name: 'author' , value: title}
             ]
         };

         req.azureMobile.data.execute(query)
         .then(function (result) {
         res.json(result);
         });

    }

};

api.post.access = 'anonymous';
module.exports = api;