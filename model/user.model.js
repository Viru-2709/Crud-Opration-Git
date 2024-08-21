const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstname: String,
  lastname: String,
  middelname: String,
  username: String,
  email: String,
  number: Number,
  password: String,
  role: String,
  city: String,
  country: String,
});

const USER = mongoose.model('user', userSchema);

module.exports = USER