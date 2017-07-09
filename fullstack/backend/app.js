import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Debug from 'debug';
import express from 'express';
import logger from 'morgan';
const dotenv = require('dotenv');
import mongoose from 'mongoose';

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.load({ path: '.env.example' });


// import favicon from 'serve-favicon';
import path from 'path';
import lessMiddleware from 'less-middleware';
import index from './routes/index';

//import all Routes
import employerAPI from './routes/employerRoute';
import talentAPI from './routes/talentRoute';
import jobAPI from './routes/jobRoute';
/**
 * Connect to MongoDB.
 */
mongoose.Promise = global.Promise;
//mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});

/************************************************************
* ----------------Start of Testing section---------------
* this section is to test connection and updating to database
* before CRUD implementation
************************************************************/
//import all Models
// import Talent from "./Model/talentModel";
// import Employer from "./model/employerModel";
// import Job from "./model/jobModel";
//
// //hard code creation on Talent Schema
// let talent1 = new Talent ({
//   email         : "juliana@gmail.com",       //Talent's email address
//   name          : "Juliana",                            //Talent's  name
//   contact       : "12345678",                           //contact number
//   address       : "Woodlands Ave",                      //company location
//   qualification : "test",                               //highest qualification
//   skillList     : ["html", "js" ],                      //list of skills
//   salary        : 5000                                 //minimum monthly salary requirement
//   });
//
// //a callback because you want to check on the error IMMEDIATELY after you create the Talent object
// talent1.save((err) => {
//     if(err){
//       console.log (err.message);
//       return;
//     }
//     console.log ('Talent 1 has been saved');   //output to terminal
//   });
//
// //hard code creation on Employer Schema
// let employer1 = new Employer ({
//   email         : "employerABC@employer1.com",        // email address for employer
//   name          : "Employer ABC Limited",             //Employer's company name
//   contact       : "12225678",                             //contact number
//   address       : "Orchard Central"
//   });
//
// //a callback because you want to check on the error IMMEDIATELY after you create the Flight object
// employer1.save((err) => {
//     if(err){
//       console.log (err.message);
//       return;
//     }
//     console.log ('Employer 1 has been saved');   //output to terminal
//   });
//
//   //hard code creation on Job Schema
//   let job1 = new Job ({
//     title         : "Software Engineer",             //Job title
//     maxSalary     : "20000",             //max salary
//     qualification : "Bsc",             //min qualification
//     skillList     : ["html", "js" ],              //list of skills
//     closingDate   : "20 June 2017",               //closing date for this job
//     talentList    : [talent1],
//     employer      : employer1      //contains an Employer information
//     });
//
//   //a callback because you want to check on the error IMMEDIATELY after you create the Flight object
//   job1.save((err) => {
//       if(err){
//         console.log (err.message);
//         return;
//       }
//       console.log ('Job 1 has been saved');   //output to terminal
//     });


/************************************************************
* -----------End of Testing section--------------
* this section is to test connection and updating to database
* before CRUD implementation
************************************************************/


const app = express();
const debug = Debug('backend:app');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req, res, next) {
  console.log( "Method: " + req.method +" Path: " + req.url)
  next();
});

// paths
app.use('/', index);
app.use('/employer', employerAPI);
app.use('/talent', talentAPI);
app.use('/job', jobAPI);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
/* eslint no-unused-vars: 0 */
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Handle uncaughtException
process.on('uncaughtException', (err) => {
  console.log(err);
  process.exit(1);
});

export default app;
