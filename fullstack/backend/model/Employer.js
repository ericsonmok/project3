// model/Employer.js

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const user = require ('./User');

// define the schema for our Employer
var employerSchema = mongoose.Schema({
    employerId    : [{                  //an array of Talent id who applied for this position
      type: mongoose.Schema.Types.ObjectId,
      ref: user
    }],
    name          : String,                           //Employer's company name
    contact       : String,                           //contact number
    address       : String                            //Employer business address
},{ timestamps: true });


module.exports = mongoose.model('Employer', employerSchema);
