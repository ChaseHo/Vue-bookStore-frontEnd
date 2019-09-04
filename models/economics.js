var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Economics = new Schema({
  title: {
    type: String
  },
  author: {
    type: String
  },
  price: {
    type: String
  },
  summary: {
    type: String
  },
  pubdate: {
      type: String
  },
  largeIMG: {
    type: String,
    default: '../assets/image_default/large_default.png'
  },
  midIMG: {
      type: String,
      default: '../assets/image_default/mid_default.png'
  },
  smallIMG: {
    type: String,
    default:'../assets/image_default/small_default.png'
  },
  publisher: {
    type: String
  },
  origin_title: {
    type: String
  },
  translator: {
    type: String
  },
  tag: {
    type: String
  }
},{
	collection: 'economics'
});

module.exports = mongoose.model('Economics', Economics);
