//model/talentModel.js
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const user = require ('./User')

// define the schema for our Employer
var talentSchema = mongoose.Schema({
    talentId    : [{                  //an array of Talent id who applied for this position
      type: mongoose.Schema.Types.ObjectId,
      ref: user
    }],
    name          : String,                               //Talent's  name
    contact       : String,                               //contact number
    address       : String,                               //company location
    qualification : String,                               //highest qualification
    skillList     : Array,                                //list of skills
    salary        : Number                              //minimum salary requirement

},{ timestamps: true});

module.exports = mongoose.model('Talent', talentSchema);
