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
        console.log("RATE: id:" + id);
        console.log("RATE: rate:" + rate);

        var query = {id: id};

        context.tables('AuthorPosts')
            .where(query)
            .read()
            .then(results => {

                var sqlItem = results.pop();

                console.log("RATE: Valoracion: " + sqlItem.rate);
                console.log("RATE: Numero de valor: " + sqlItem.numRates);

                var valoracion_str = sqlItem.rate;
                var numero_str = sqlItem.numRates;

                // Convertimos a numero para hacer la jugada
                var valoracion = parseInt(valoracion_str,10);
                var numero = parseInt(numero_str,10);


                var valGlobal = valoracion * numero;

                console.log("RATE: AHORA Val: " + valoracion);
                console.log("RATE: AHORA numero:" + numero);
                console.log("RATE: AHORA total:" + valGlobal);

                valGlobal = valGlobal + parseInt(rate,10);

                console.log("RATE: A MITAD total:" + valGlobal);
                numero = numero + 1;
                valGlobal = valGlobal / numero;

                console.log("RATE: LUEGO Val: " + valoracion);
                console.log("RATE: LUEGO numero:" + numero);
                console.log("RATE: LUEGO total:" + valGlobal);

                console.log("RATE: Nueva valoracion global: " + valGlobal);

                var query = {
                    sql: "UPDATE AuthorPosts SET rate=@rate, numRates=@numrates WHERE id=@id",
                    parameters: [
                        {name: 'rate', value: valGlobal},
                        {name: 'numrates', value: numero},
                        {name: 'id', value: id}
                    ]
                };

                req.azureMobile.data.execute(query)
                    .then(function (result) {
                        res.json({status: "OK"});
                    })
                    .catch(next)

            })
            .catch(next)

    }

};

api.put.access = 'anonymous';
module.exports = api;