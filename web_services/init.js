

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extendedd:true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    next();
});

app.get('/historia',function(req,res){
var id = req.query.id;
switch(id){
	case '1':
		var historia = [{"capa":"sp2","bandera":"br","cuidad":"Sao Paulo, Brasil","titulo1":"Como es vivir en Sao Paulo,","titulo2":"la mayor cuidad de America Latina.","fecha":"06 de marzo, 2016."}];
		res.contentType('application/json');
		res.send(JSON.stringify(historia));
		break;
     case '2':
                 var historia = [{"capa":"rio2","bandera":"br","cuidad":"Rio de Janeiro, Brasil","titulo1":"¿Qué hacer? ¿Qué conocer? en Río de Janeiro.","titulo2":"La Cidade Maravilhosa.","fecha":" 6 de marzo, 2016."}];
                res.contentType('application/json');
                res.send(JSON.stringify(historia));
                break;

         case '3':
                 var historia = [{"capa":"santos2","bandera":"br","cuidad":"Santos, Brasil","titulo1":"Santos,","titulo2":"la cuidad del rey Pelé y Neymar Jr.","fecha":"6 de marzo, 2016."}];
                res.contentType('application/json');
                res.send(JSON.stringify(historia));
                break;
	default:
	console.log('llegue');
		res.send('0');
}
});


app.get('/pais',function(req,res){
var id = req.query.id;
switch(id){
	case '1':
		var historia = [{"capa":"sp2","bandera":"ar","pais":"Argentina"}];
		res.contentType('application/json');
		res.send(JSON.stringify(historia));
		break;
     case '2':
                 var historia = [{"capa":"rio2","bandera":"br","cuidad":"Rio de Janeiro, Brasil","titulo1":"¿Qué hacer? ¿Qué conocer? en Río de Janeiro.","titulo2":"La Cidade Maravilhosa.","fecha":" 6 de marzo, 2016."}];
                res.contentType('application/json');
                res.send(JSON.stringify(historia));
                break;

         case '3':
                 var historia = [{"capa":"santos2","bandera":"br","cuidad":"Santos, Brasil","titulo1":"Santos,","titulo2":"la cuidad del rey Pelé y Neymar Jr.","fecha":"6 de marzo, 2016."}];
                res.contentType('application/json');
                res.send(JSON.stringify(historia));
                break;
	default:
	console.log('llegue');
		res.send('0');
}
});

app.listen(3500, function(){
console.log('Running');
});
