var express = require('express');
var router = express.Router();
const{ check, validationResult} = require('express-validator');

router.get('/', function(req,res){
	//res.send('coba latihan');
	res.render('index',{
		h1 : 'admin area'
	});
});

router.get('/add-page', function(req,res){
	var title = "";
	var link = "";
	var content = "";

	res.render('admin/add_pages',{
		title : title,
		link : link,
		content : content
	});
});

router.post('/add-page',[
  
	check('title', 'Title harus diisi!!').notEmpty(),
	check('content', 'Content harus diisi!!').notEmpty()

], function(req, res){

	var title = req.body.title;
	var link = req.body.link.replace(/\s+/g, '-').toLowerCase();
		if(link==""){
			link = req.body.title.replace(/\s+/g, '-').toLowerCase();
		}
	var content = req.body.content;

	var errors = validationResult(req);
	console.log(errors);

	if(errors.errors){
		res.render('admin/add_pages',{
			errors:errors,
			title:title,
			link:link,
			content:content
		});
		console.log('habis');
	}else{
		console.log('Berhasil');	
	}
});

module.exports = router;