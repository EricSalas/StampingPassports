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

            /**
            var historia = [{
                "capa": "sp2",
                "bandera": "br",
                "cuidad": "Sao Paulo, Brasil",
                "titulo1": "Como es vivir en Sao Paulo,",
                "titulo2": "la mayor cuidad de America Latina.",
                "fecha": "06 de marzo, 2016."
            }];**/
           /** res.contentType('application/json');
            res.send(JSON.stringify(historia));**/
            leerJSON('destinos',res, 1,id);
 
});

function leerJSON(archivo, res, tipo, id) {
    console.log('leer archivo');
    var fs = require('fs');
    fs.readFile('./data/' + archivo + '.json', 'utf8', function(err, data) {
        if (!err) {
            var file = JSON.parse(data);
            switch(tipo){
                case 1:
                    console.log(file);
            }
            res.contentType('application/json');
            res.send('working bitch');
        }else{
            console.log(err);
        }
    });
}

app.get('/pais', function(req, res) {
    var id = req.query.id;
    switch (id) {
        case '1':
            leerJSON('argentina', res);
            break;
        case '2':
            var pais = leerJSON('bolivia', res);
            //res.send(JSON.stringify(pais));
            break;

        case '3':
            var pais = leerJSON('brasil', res);
            break;
        default:
            console.log('llegue');
            res.send('0');
    }
});

app.listen(3500, function() {
    console.log('Running');
});
