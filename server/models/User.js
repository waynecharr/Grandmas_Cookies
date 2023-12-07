const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const Cookies = require('./Cookies');

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    // set savedBooks to be an array of data that adheres to the cookieSchema
    savedCookies: [Cookies],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // custom method to compare and validate password for logging in
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
  // when we query a user, we'll also get another field called `cookieCount` with the number of saved books we have
  userSchema.virtual('cookieCount').get(function () {
    return this.savedBooks.length;
  });
  
  const User = model('User', userSchema);
  
  module.exports = User;
  