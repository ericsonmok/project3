// model/employerModel.js

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// define the schema for our Employer
var employerSchema = mongoose.Schema({
    email         : String,   // email address for employer
    name          : String,                           //Employer's company name
    contact       : String,                           //contact number
    address       : String,
    password      : String
},{ timestamps: true });


/**
 * Password hash middleware.
 */
employerSchema.pre('save', function save(next) {

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

employerSchema.methods.comparePassword = function comparePassword(candidatePassword, cb){
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      cb(err, isMatch);
  });
};

module.exports = mongoose.model('Employer', employerSchema);
