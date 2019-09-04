var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Categories = new Schema({
  name: {
    type: String
  },
  title: {
    type: String
  }
},{
	collection: 'categories'
});

module.exports = mongoose.model('Categories', Categories);
