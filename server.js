const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      config = require('./config/DB'),
      itemRoutes = require('./expressRoutes/itemRoutes');
      usersRoutes = require('./expressRoutes/usersRoutes')
      categoryRoutes = require('./expressRoutes/categoriesRoutes')
      topicRoutes = require('./expressRoutes/topicRoutes')
      hotBooksRoutes = require('./expressRoutes/hotBooksRoutes')
      discountBooksRoutes = require('./expressRoutes/discountBooksRoutes')
      newBooksRoutes = require('./expressRoutes/newBooksRoutes')
      computerRoutes = require('./expressRoutes/computerRoutes')
      historyRoutes = require('./expressRoutes/historyRoutes')
      economicsRoutes = require('./expressRoutes/economicsRoutes')
      literatureRoutes = require('./expressRoutes/literatureRoutes')

      mongoose.Promise = global.Promise;
      mongoose.connect(config.DB).then(
          () => {console.log('Database is connected') },
          err => { console.log('Can not connect to the database'+ err)}
        );

      const app = express();
      app.use(express.static('public'));
      app.use(bodyParser.json());
      app.use(cors());
      app.use('/items', itemRoutes);
      app.use('/users', usersRoutes);
      app.use('/category', categoryRoutes);
      app.use('/topic', topicRoutes);
      app.use('/hotBooks', hotBooksRoutes);
      app.use('/discountBooks', discountBooksRoutes);
      app.use('/newBooks', newBooksRoutes);
      app.use('/computer', computerRoutes);
      app.use('/history', historyRoutes);
      app.use('/economics', economicsRoutes);
      app.use('/literature', literatureRoutes);
      const port = process.env.PORT || 5000;

      const server = app.listen(port, function(){
        console.log('Listening on port ' + port);
      });
