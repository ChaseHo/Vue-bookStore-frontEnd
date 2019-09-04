var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Topic = new Schema({
  name: {
    type: String
  },
  title: {
    type: String
  }
},{
	collection: 'topic'
});

module.exports = mongoose.model('Topic', Topic);
