const express = require('express');
const server = express();
const router = require('./routes/index');
const morgan = require('morgan');



//// lo q hace esto, es q la info q me llega en formato json, la pasa a objeto de js para q yo la pueda trabajar.
server.use(express.json()); 
server.use(morgan('dev'));

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use('/rickandmorty', router);

module.exports = server
