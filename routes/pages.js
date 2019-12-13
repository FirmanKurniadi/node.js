var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
	//res.send('coba latihan');
	res.render('index',{
		h1 : 'jhgj'
	});
});

router.get('/product', function(req,res){
	// res.send('coba latihan');
	res.render('index',{
		h1 : 'product keren'
	});
});

module.exports = router;