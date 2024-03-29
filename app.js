var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express(),
    engine = require('ejs-locals'),
    mongoose = require('mongoose'),    
    db = mongoose.connection;

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.engine('ejs', engine);

// view engine setup
app.set('views', path.join(__dirname, '/server/views'));
app.set('view engine', 'ejs');


//  rotas e api
var routes = require('./server/config/routes')(app),
    api = require('./server/config/api')(app);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// database for tests
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('ok');
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    
    mongoose.connect('mongodb://trackr:devmaster@kahana.mongohq.com:10037/app29153307');

    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
