var express = require('express');
var app = express();


var port =process.env.PORT || 3000;
app.set('view engine','jade');
app.use(express.static('public'));
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var bodyParser= require('body-parser');
var parseUrlEncoded = bodyParser.urlencoded({extended: false});


io.on('connection', function(client){
	
	console.log('cliente conectado');
	client.on('chat', function(datos){
		console.log('enviando mensaje');
		io.emit('chat', datos);
		
		
	});
	
	
});


app.get('/p',function(request,response){

	
	if(request.query.id == 'rs7'){
		
		var bloque = ['Titulo: RS7   </br>', 'Imagen:\public\img\producto_1.jpg   </br>', 'Stock:8'];
		response.json(bloque);
		
	}else if(request.query.id == 'ds3'){
		
		var bloque = ['Titulo: DS3  </br> ', 'Imagen:\public\img\producto_2.jpg  </br> ', 'Stock:4'];
		response.json(bloque);
		
	}else if(request.query.id == 'f4'){
		
		var bloque = ['Titulo: F4  </br> ', 'Imagen:\public\img\producto_3.jpg  </br> ', 'Stock:12'];
		response.json(bloque);
		
	}
	
});


server.listen(port);