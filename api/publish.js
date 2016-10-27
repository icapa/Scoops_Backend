/**
 * Created by icapa on 27/10/16.
 */
var api = {
    put: function (req, res, next) {



        var id = req.query.id;
        var wantpublish = req.query.wantpublish;
        var context = req.azureMobile;
        var user = context.user.id;

        var item = {
            wantPublish : wantPublish
        };

        context.tables('AuthorPosts')
            .insert(item)
            .then(() => res.status(200).json({status: 'OK',wantPublish : wantpublish}))
            .catch(next);

        var query = {
            sql: "UPDATE FROM AuthorPosts SET wantPublish=@wantPublish WHERE id=@id",
            params: {wantPublish : wantpublish, id: id}
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