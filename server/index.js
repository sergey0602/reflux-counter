import express from 'express';
import mongoose from 'mongoose';
import Counter from './model';
import config from './config';

const app = express();

const { dbuser, dbpassword } = config;

mongoose.connect(`mongodb://${dbuser}:${dbpassword}@ds225308.mlab.com:25308/counter`);

app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:6289');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/count', (req, res) => {
  Counter.findDocument((error, doc) => {
    if (error) {
      return res.status(500);
    }

    res.json({count: doc[0].count});
  });
});

app.get('/count/:id', (req, res) => {
  Counter.findDocument((error, doc) => {
    if (error) {
      return res.status(500);
    }

    if (req.params['id'] === 'increment') {
      Counter.updateCounter(doc[0]._id, doc[0].count + 1, (err, value) => {
        res.json({count: value.count});
      });
    } else if (req.params['id'] === 'decrement') {
      Counter.updateCounter(doc[0]._id, doc[0].count - 1, (err, value) => {
        res.json({count: value.count});
      });
    }
  });
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


app.listen(3000, () => console.log('Server successfully started on http://localhost:3000/'));
