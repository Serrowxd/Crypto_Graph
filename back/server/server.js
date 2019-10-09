// Node
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const passport = require('passport');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Local Routes

mongoose.connect('mongodb://localhost/ihlfg');

// Server
const server = express();
const port = 5000;

// Logger

function logger(req, res, next) {
  console.log('body: ', req.body);

  next();
}

// Middleware
server.use(morgan('dev'));
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(logger);

// Imports

const Data = require('./data/dataSchema.js');

// Server

const router = express.Router();

server.get('/get', function(req, res) {
  Data.find()
    .then(datas => {
      res.json(datas);
    })
    .catch(err => {
      res.status(500).json({ error: 'Data does not exist' });
    });
});

server.get('/:id', function(req, res) {
  const { id } = req.params;
  Data.findById(id)
    .then(data => {
      if (data === null) {
        return res.status(404).json({ error: 'This data does not exist!' });
      }
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post('/post', (req, res) => {
  const Data = new Data(req.body);
  Data.save()
    .then(data => {
      res.send('Data Saved');
    })
    .catch(err => {
      res.status(400).send('Unable to save data');
    });
});

server.put('/:id', (req, res) => {});

server.delete('/:id', (req, res) => {
  const { id } = req.params;
  let Data;

  Data.findByIdAndRemove(id)
    .then(res => {
      res.status(200).json({ id });
    })
    .catch(err => res.status(400).json(err));
});

server.listen(port, () => console.log(`d-(OvO")z up and running on port ${port}`));

module.exports = server;
