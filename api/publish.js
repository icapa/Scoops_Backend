/**
 * Created by icapa on 27/10/16.
 */
var api = {
    put: function (req, res, next) {



        var id = req.query.id;
        var wantpublish = req.query.wantpublish;

        console.log("----- PUT PARAMETERS -------");
        console.log("id: " + id);
        console.log("wantpublish: " + wantpublish);
        console.log("-----------------------------");



        var context = req.azureMobile;


        var user = context.user.id;

        var item = {
            wantPublish : wantpublish
        };


        var query = {
            sql: "UPDATE AuthorPosts SET wantPublish=@wantPublish WHERE id=@id",
            parameters: [
                    {name: 'wantPublish' , value : wantpublish},
                    {name: 'id', value : id}
                ]
        };

        req.azureMobile.data.execute(query)
            .then(function (result) {
                res.json({status: "OK", wantPublish:wantpublish});
            })
            .catch(next)

    }

};

api.put.access = 'authenticated';
module.exports = api;