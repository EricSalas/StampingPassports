var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extendedd: true
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    next();
});

app.get('/ultimosDestinos', function(req, res) {
    leerJSON('destinos', res, 3);
});

app.get('/destino', function(req, res) {
    var id = req.query.id;
    var lg = req.query.lg;
  //  leerJSON('destinos-' + lg, res, 1, id);
  leerJSON('destinos', res, 1, id);
});

app.get('/base', function(req, res) {
    var id = req.query.id;
 //   leerJSON('base-destinos', res, 1, id);
});

app.get('/traduccion', function(req, res) {
    var lg = req.query.lg;
    leerJSON('destinos-' + lg, res, 1);
});

function leerJSON(archivo, res, tipo, id) {
    var fs = require('fs');
    fs.readFile('./data/' + archivo + '.json', 'utf8', function(err, data) {
        if (!err) {
            var resp = '';
            var file = JSON.parse(data);
            switch (tipo) {
                case 1:
                    /**Lectura de archivo de destinos en donde debe responderse solo con la data del destino**/

                    resp = file[id - 1];
                    console.log(resp.length);
                    if ((resp === undefined) || (resp === id) || (resp === 'undefined')) {
                        resp = "0";
                    }
                    break;
                case 2:
                    /**Lectura de archivo de paises en donde debe ir todo**/
                    resp = file;
                    break;
                case 3:
                    /**Lectura de archivo de destinos, pero solo deben de ir los tres ultimos objetos**/
                    var tam = file.length;
                    resp = file.slice((tam - 3), tam + 1);
                    break;


            }
            res.contentType('application/json');
            res.send(resp);
        } else {
            console.log(err);
        }
    });
}

app.get('/pais', function(req, res) {
    var id = req.query.id;
    switch (id) {
        case '1':
            leerJSON('argentina', res, 2);
            break;
        case '2':
            var pais = leerJSON('bolivia', res, 2);
            //res.send(JSON.stringify(pais));
            break;

        case '3':
            var pais = leerJSON('brasil', res, 2);
            break;
        default:
            res.send('0');
    }
});

app.listen(3500, function() {
    console.log('Running');
});
