var express = require('express');
var app = express();
var categoriesRoutes = express.Router();

// Require Item model in our routes module
var Categories = require('../models/Categories');

// Defined store route
categoriesRoutes.route('/add').post(function (req, res) {
  var category = new Categories(req.body);
      category.save()
    .then(item => {
    res.status(200).json({'item': 'Item added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

categoriesRoutes.route('/addUser').post(function (req, res) {
    var category = new Categories(req.body);
        category.save()
      .then(item => {
      res.status(200).json({'item': 'Item added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });
// Defined get data(index or listing) route
categoriesRoutes.route('/').get(function (req, res) {
  Categories.find(function (err, items){
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});

// Defined edit route
categoriesRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Categories.findById(id, function (err, item){
      res.json(item);
  });
});

//  Defined update route
categoriesRoutes.route('/update/:id').post(function (req, res) {
  Categories.findById(req.params.id, function(err, item) {
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
categoriesRoutes.route('/delete/:id').get(function (req, res) {
  Categories.findByIdAndRemove({_id: req.params.id}, function(err, item){
		if(err) res.json(err);
		else res.json('Successfully removed');
	});
});

module.exports = categoriesRoutes;
