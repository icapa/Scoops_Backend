/**
 * Created by icapa on 25/10/16.
 */
var api = {
    get: function (req, res, next) {

        var query = {
            sql: "Select * FROM Autors"
        };

        req.azureMobile.data.execute(query)
            .then(function (result) {
                res.json(result);
            })
            .catch(res.json.({status:"ERROR"});

    }

};

api.get.access = 'anonymous';
module.exports = api;