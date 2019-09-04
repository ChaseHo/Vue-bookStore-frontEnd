var express = require('express');
var app = express();
var topicRoutes = express.Router();

// Require Item model in our routes module
var Topic = require('../models/Topic');

// Defined store route
topicRoutes.route('/add').post(function (req, res) {
  var topic = new Topic(req.body);
      topic.save()
    .then(item => {
    res.status(200).json({'item': 'Item added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

topicRoutes.route('/addUser').post(function (req, res) {
    var topic = new Topic(req.body);
        topic.save()
      .then(item => {
      res.status(200).json({'item': 'Item added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });
// Defined get data(index or listing) route
topicRoutes.route('/').get(function (req, res) {
  Topic.find(function (err, items){
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});

// Defined edit route
topicRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Topic.findById(id, function (err, item){
      res.json(item);
  });
});

//  Defined update route
topicRoutes.route('/update/:id').post(function (req, res) {
  Topic.findById(req.params.id, function(err, item) {
    if (!item)
      return next(new Error('Could not load Document'));
    else {
      item.name = req.body.name;
      item.title = req.body.title;
      item.save().then(item => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
topicRoutes.route('/delete/:id').get(function (req, res) {
  Topic.findByIdAndRemove({_id: req.params.id}, function(err, item){
		if(err) res.json(err);
		else res.json('Successfully removed');
	});
});

module.exports = topicRoutes;
