var mongoose = require('mongoose');

var PagesSchema = mongoose.Schema({
	title: {
		type: String,
		required: true 
	},
	link: {
		type: String
	},
	content: {
		type: String,
		required: true
	},
	sorting: {
		type: Number
	}
});

var page = module.exports = mongoose.model('Pages', PagesSchema);