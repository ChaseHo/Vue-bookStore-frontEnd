var express = require('express');
var app = express();
var discountBooksRoutes = express.Router();

// Require Item model in our routes module
var DiscountBooks = require('../models/DiscountBooks');

// Defined store route
discountBooksRoutes.route('/add').post(function (req, res) {
  var discountBooks = new DiscountBooks(req.body);
      discountBooks.save()
    .then(item => {
    res.status(200).json({'item': 'Item added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

discountBooksRoutes.route('/addUser').post(function (req, res) {
    var discountBooks = new DiscountBooks(req.body);
        discountBooks.save()
      .then(item => {
      res.status(200).json({'item': 'Item added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });
// Defined get data(index or listing) route
discountBooksRoutes.route('/').get(function (req, res) {
  DiscountBooks.find(function (err, items){
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});

// Defined edit route
discountBooksRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  DiscountBooks.findById(id, function (err, item){
      res.json(item);
  });
});

//  Defined update route
discountBooksRoutes.route('/update/:id').post(function (req, res) {
  DiscountBooks.findById(req.params.id, function(err, item) {
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
discountBooksRoutes.route('/delete/:id').get(function (req, res) {
  DiscountBooks.findByIdAndRemove({_id: req.params.id}, function(err, item){
		if(err) res.json(err);
		else res.json('Successfully removed');
	});
});

module.exports = discountBooksRoutes;
