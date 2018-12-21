const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('config')
const indexRouter = require('./routes/index');
const router = require('./lib/router')
const app = express();
const moment = require('moment')
require('dotenv').config();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

console.log('================================================');
console.log(' Start Server                                   ');
console.log(' * NODE_ENV    : %s'           ,process.env.NODE_ENV);
console.log(' * config Name : %s'           ,config.get('name'));
console.log('================================================');

// Date.prototype.addDays = function(days) {
// 	this.setDate(this.getDate() + parseInt(days));
// 	return this;
// };
//
// Date.prototype.format = function(f) {
// 	return moment(this).format(f)
// };

const morganSkip = ( req, res )=>{
	return config.get('morgan.skip');
}


// let originsWhitelist = config.get('cors.allow-origin') || []
//
// var corsOptions = {
// 	origin: function(origin, callback){
// 		var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
// 		callback(null, isWhitelisted);
// 	},
// 	credentials:true
// }

app.use( cors() );

app.use( logger( config.get('morgan.format') , { skip: morganSkip } ) );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/public',express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

router.init(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

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
