const mongoose = require('mongoose');

//Schema
const HouseSchema = new mongoose.Schema({
  userName: {type: String, required: true},
  userImageUri: {type: String, required: true},
  postImageUri: {type: String, required: true},
  caption: String,
  description: String,
  likesCount: {type: Number, required: true},
  commentsCount: {type: Number, required: true},
  postedAt: {type: String, required: true},
});

// create model
module.exports = mongoose.model('House', HouseSchema);
