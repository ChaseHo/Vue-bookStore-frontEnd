var express = require('express');
var app = express();
var usersRoutes = express.Router();

// Require Item model in our routes module
var Users = require('../models/Users');

// Defined store route
usersRoutes.route('/add').post(function (req, res) {
  var users = new Users(req.body);
      users.save()
    .then(item => {
    res.status(200).json({'item': 'Item added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

usersRoutes.route('/addUser').post(function (req, res) {
    var users = new Users(req.body);
        users.save()
      .then(item => {
      res.status(200).json({'item': 'Item added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });
// Defined get data(index or listing) route
usersRoutes.route('/').get(function (req, res) {
  Users.find(function (err, items){
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});

// Defined edit route
usersRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Users.findById(id, function (err, item){
      res.json(item);
  });
});

//  Defined update route
usersRoutes.route('/update/:id').post(function (req, res) {
  Users.findById(req.params.id, function(err, item) {
    if (!item)
      return next(new Error('Could not load Document'));
    else {
      item.username = req.body.username;
      item.password = req.body.password;
      item.isBlack = req.body.isBlack;
      item.buyBook = req.body.buyBook;
      item.bill = req.body.bill;
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
usersRoutes.route('/delete/:id').get(function (req, res) {
  Users.findByIdAndRemove({_id: req.params.id}, function(err, item){
		if(err) res.json(err);
		else res.json('Successfully removed');
	});
});

module.exports = usersRoutes;
