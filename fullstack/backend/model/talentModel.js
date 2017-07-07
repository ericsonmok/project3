//model/talentModel.js
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import uuid from 'uuid-v4';

// define the schema for our Employer
var talentSchema = mongoose.Schema({


    email         : { type: String, unique: true },       //Talent's email address
    name          : String,                               //Talent's  name
    contact       : String,                               //contact number
    address       : String,                               //company location
    qualification : String,                               //highest qualification
    skillList     : Array,                                //list of skills
    salary        : Number                                //minimum salary requirement

},{ timestamps: true});

/**
 * Password hash middleware.
 */
talentSchema.pre('save', function save(next) {

  console.log('pre save hook');
  const user = this;
  if (!user.isModified('password')) { return next(); }
  console.log('password is modified');
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err); }
    console.log('salt generated');
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) { return next(err); }
      console.log('saving hash');
      user.password = hash;
      next();
    });
  });
});

talentSchema.methods.comparePassword = function comparePassword(candidatePassword, cb){
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      cb(err, isMatch);
  });
};


module.exports = mongoose.model('Talent', talentSchema);
