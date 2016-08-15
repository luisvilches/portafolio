var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

module.exports= {

	sendmail : function(req,res){
		var email = req.body.mail;
		var nombre = req.body.name;
		var telefono = req.body.tel;
		var mensaje = req.body.msg;

		if(/(.+)@(.+){2,}.(.+){2,}/.test(email)){

			var conta = nodemailer.createTransport({
				service: "Gmail",
				host: "smpt.gmail.com",
				port: 465,
				secure: true,
				auth:{
					user: 'lvilches21',
					pass: 'andres3190'
				}
			});

			var mailOptions = {
				from: email ,
				to: "portafolios <lvilches21@gmail.com>" ,
				subject: " Nuevo mensaje desde tu portafolios | Correo: " +email ,
				//html: "Telefono: "+telefono+"  |  Correo: " + email+"  |  Mensaje: "+mensaje
				html: "<p> nombre: " +nombre+ " || Correo: "+email+" || Telefono: "+telefono+" || mensaje: </p><hr><br><p>"+mensaje+"</p>" 
			}

			conta.sendMail(mailOptions, function(error,response){
				if (error) {
					console.log(error);
					res.send("Ocurrio un error intentelo mas tarde");
				}else{
					
					console.log(response);
					res.redirect('/');
				}
			});
		}else{
			res.send("el email no es valido")
		}
	}
}