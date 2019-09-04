var express = require('express');
var app = express();
var computerRoutes = express.Router();

// Require Item model in our routes module
var Computer = require('../models/Computer');

// Defined store route
computerRoutes.route('/add').post(function (req, res) {
  var computer = new Computer(req.body);
      computer.save()
    .then(item => {
    res.status(200).json({'item': 'Item added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

computerRoutes.route('/addUser').post(function (req, res) {
    var computer = new Computer(req.body);
        computer.save()
      .then(item => {
      res.status(200).json({'item': 'Item added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });
// Defined get data(index or listing) route
computerRoutes.route('/').get(function (req, res) {
  Computer.find(function (err, items){
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});

// Defined edit route
computerRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Computer.findById(id, function (err, item){
      res.json(item);
  });
});

//  Defined update route
computerRoutes.route('/update/:id').post(function (req, res) {
  Computer.findById(req.params.id, function(err, item) {
    if (!item)
      return next(new Error('Could not load Document'));
    else {
      item.title = req.body.title;
      item.author = req.body.author;
      item.price = req.body.price;
      item.summary = req.body.summary;
      item.pubdate = req.body.pubdate;
      item.largeIMG = req.body.largeIMG;
      item.midIMG = req.body.midIMG;
      item.smallIMG =req.body.smallIMG;
      item.publisher = req.body.publisher;
      item.origin_title = req.body.origin_title;
      item.translator = req.body.translator;
      item.tag = req.body.tag;
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
computerRoutes.route('/delete/:id').get(function (req, res) {
  Computer.findByIdAndRemove({_id: req.params.id}, function(err, item){
		if(err) res.json(err);
		else res.json('Successfully removed');
	});
});

module.exports = computerRoutes;
