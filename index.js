var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');
var cloudinary = require('cloudinary');
var uploader = multer({dest: "./uploads"});
var nodemailer = require('nodemailer');


var routes = require('./routes/routes');

var app = express();


/////// CONFIGURACIONES ////////////////////////

app.set('port', process.env.PORT || 5000);
app.set('Views', path.join(__dirname,'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));
app.use(express.static('public'));

app.use('/',routes);

///////////////////////////////////////////////

/////// CONECCION BASE DE DATOS ///////////////


mongoose.connect('mongodb://<luisvilches:andres2230@ds153765.mlab.com:53765/portafolio', function(err,res){
	if (err) {console.log(err);
	};
});

///////////////////////////////////////////////


//////// CONFIGURACION DE CLOUDINARY //////////

cloudinary.config({
	cloud_name: "accecar",
	api_key: "581627995675862",
	api_secret: "y2jQCRNi1-UVx2n552vEi8Yywoc"
});

/////// SERVIDOR //////////////////////////////

app.listen(app.get('port'), function(){
	console.log("corriendo en el puerto: "+ app.get('port'));
});