module.exports = {

	verify : function(req,res){

		var user = "admin";
		var pass = "andres2230";
		var usuario = req.body.name;
		var clave = req.body.pass;

		if ((usuario = user)&&(clave = pass)) {

			res.render('admin/dashboard');

		}else{

			res.redirect('/');

		}

	}
}
