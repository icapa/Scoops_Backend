/**
 * Created by icapa on 28/10/16.
 */
var api = {
    put: function (req, res, next) {



        var id = req.query.id;
        var titulo = req.query.title;
        var texto = req.query.text;
        var autor = req.query.author;
        var photo = req.query.photo;




        var context = req.azureMobile;


        var user = context.user.id;
        


        var query = {
            sql: "UPDATE AuthorPosts SET title=@title, author=@author, text=@text , photo=@photo WHERE id=@id",
            parameters: [
                {name: 'title' , value : titulo},
                {name: 'author', value : autor},
                {name: 'text', value:texto},
                {name: 'id', value: id},
                {name: 'photo', value: photo}
            ]
        };

        req.azureMobile.data.execute(query)
            .then(function (result) {
                res.json({status: "OK"});
            })
            .catch(next)

    }

};

api.put.access = 'authenticated';
module.exports = api;