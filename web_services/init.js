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

app.get('/ultimosDestinos',function(req,res){
      leerJSON('destinos', res, 3);
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
    leerJSON('destinos', res, 1, id);

});

function leerJSON(archivo, res, tipo, id) {
    console.log('leer archivo');
    var fs = require('fs');
    fs.readFile('./data/' + archivo + '.json', 'utf8', function(err, data) {
        if (!err) {
            var resp = '';
            var file = JSON.parse(data);
            switch (tipo) {
                case 1:
                    /**Lectura de archivo de destinos en donde debe responderse solo con la data del destino**/
                    resp = file[id - 1];
                    if(resp===undefined){
                        resp = '0';
                    }
                case 2:
                    /**Lectura de archivo de paises en donde debe ir todo**/
                    resp = file;
                case 3:
                    /**Lectura de archivo de destinos, pero solo deben de ir los tres ultimos objetos**/
                    resp = file.slice(0,2);
var tam = file.length;
resp = file.slice((tam-3),tam+1);
                    
                    
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
            console.log('llegue');
            res.send('0');
    }
});

app.listen(3500, function() {
    console.log('Running');
});
