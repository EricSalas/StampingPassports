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

app.get('/destino', function(req, res) {
    var id = req.query.id;
    var lg = req.query.lg;
    var estado;
    switch (lg) {
        case 'es':
            estado = true;
            break;
        case 'en':
            estado = true;
            break;
        case 'pt':
            estado = true;
            break;
        case undefined:
            estado = false;
        default:
            estado = false;
            break;
    }

    if (!estado) {
        lg = 'es';
    }

    if (id !== undefined) {
        leerJSON('destinos', res, id, lg);
    } else {
        res.contentType('application/json');
        res.send("0");
    }
});

app.get('/traduccion', function(req, res) {
    var lg = req.query.lg;
    leerJSON('destinos' + lg, res, 1);
});

function leerJSON(archivo, res, id, lg) {
    var fs = require('fs');
    fs.readFile('./data/' + archivo + '.json', 'utf8', function(err, data) {
        if (!err) {
            var resp = '';
            var file = JSON.parse(data);
            /**Lectura de archivo de destinos en donde debe responderse solo con la data del destino**/
            resp = file[id - 1];
            if ((resp === undefined)  || (resp === 'undefined')) {
                resp = "0";
            } else {
                var temp;
                switch (lg) {
                    case 'en':
                        temp = {
                            base: resp[0],
                            data: resp[3]
                        };
                        break;

                    case 'pt':
                        temp = {
                            base: resp[0],
                            data: resp[2]
                        };
                        break;

                    default:
                        var temp = {
                            base: resp[0],
                            data: resp[1]
                        };
                        break;
                }
                resp = temp;
            }
            res.contentType('application/json');
            res.send(resp);
        } else {
            console.log(err);
        }
    });
}

app.listen(3500, function() {
    console.log('Running');
});