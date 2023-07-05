require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// -------- ROUTES IMPORT --------
var indexRouter = require('./routes/index');
const moviesRouter = require('./routes/movies')

var app = express();

const cors = require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// -------- ROUTES USE PREFIX --------
app.use('/', indexRouter);
app.use('/movies', moviesRouter);



module.exports = app;
