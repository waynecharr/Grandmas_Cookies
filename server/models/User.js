const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const cookieSchema = require('./Cookies');

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
    // set savedBooks to be an array of data that adheres to the bookSchema
    savedBooks: [cookieSchema],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);