// Enviroment variables
require('dotenv').config();
// DB Connection
require('./config/database').connect();

// Dependencies
const express = require('express');
const morgan  = require('morgan');
const helmet  = require('helmet');
const cors    = require('cors');


const { notFound, errorHandler } = require('./middlewares/middlewares');

// Create express app
const app = express();

//
app
  .use(morgan(process.env.ENV === 'production' ? 'common' : 'dev'))
  .use(helmet())
  .use(cors())
  .use(express.json());

// Routes

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;