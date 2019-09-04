var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Users = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  isBlack: {
    type: Boolean,
    default: false
  },
  buyBook: {
      type: String
  },
  bill: {
      type: Number
  },
  buyTime: {
    type: Date,
    default: Date.now
  }
},{
	collection: 'users'
});

module.exports = mongoose.model('Users', Users);
