/**
 * Created by icapa on 28/10/16.
 */
var api = {
    put: function (req, res, next) {
        /* Params */

        var id = req.query.id;
        var rate = req.query.rate;

        /* Context */
        var context = req.azureMobile;


        // Obtener un registro para sacar el numero de vallidaciones y la media
        console.log("RATE: id:"+id);
        console.log("RATE: rate:"+rate);

        var query = {id:id};

        context.tables('AuthorPosts')
            .where (query)
            .read()
            .then(results => {

                var sqlItem = results.pop();

                console.log("RATE: Valoracion: " + sqlItem.rate);
                console.log("RATE: Numero de valor: " + sqlItem.numRates);

                var valoracion = sqlItem.rate;
                var numero = sqlItem.numRates;

                var valGlobal = valoracion * numero;

                valGlobal = valGlobal + rate;
                numero = numero + 1;
                valGlobal = valGlobal/numero;


                console.log("RATE: Nueva valoracion global: " + valGlobal);


                res.json(results)

                // Ahora se hace un update con los nuevos valores de numero y valGlobal
                /*
                 var query = {
                 sql: "UPDATE AuthorPosts SET title=@title, author=@author, text=@text WHERE id=@id",
                 parameters: [
                 {name: 'title' , value : titulo},
                 {name: 'author', value : autor},
                 {name: 'text', value:texto},
                 {name: 'id', value: id}
                 ]
                 };

                 req.azureMobile.data.execute(query)
                 .then(function (result) {
                 res.json({status: "OK"});
                 })
                 .catch(next)
                 */
            })
            .catch(next)







    }

};

api.put.access = 'anonymous';
module.exports = api;