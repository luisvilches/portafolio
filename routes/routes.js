var express = require('express');
var router = express.Router();
var controllers = require('.././controllers');
var multer = require('multer');
var uploader = multer({dest: "./uploads"});

var middleware_upload = uploader.single('urlimg');

//////// HOME ////////////////////////////////

router.get('/', controllers.home.index);


/////// ADMINISTRACION ///////////////////////

router.get('/admin/addsite', controllers.adminController.addSiteView);
router.post('/admin/addsite',middleware_upload, controllers.addsite.addSites);

/////// FORMULARIO DE CORREO /////////////////

router.post('/sendmail', controllers.ControllerMail.sendmail);


module.exports = router;