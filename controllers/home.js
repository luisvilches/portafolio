var site = require('.././models/sites');

module.exports = {

	index : function(req,res,next){

		site.find(function(err,doc){

			if (err) {console.log('ERROR: '+err);}
			res.render('index',{ sites: doc});
		});
	}
};