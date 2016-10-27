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
                    {wantPublish : wantpublish},
                    {id: id}
                ]
        };

        req.azureMobile.data.execute(query)
            .then(function (result) {
                res.json(result);
            })
            .catch(next)

    }

};

api.put.access = 'authenticated';
module.exports = api;