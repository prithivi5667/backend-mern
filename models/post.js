const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  exp: {
    type: String,
    required: true
  },
  skills: {
    type: String,
    required: true
  },
  price:{
    type:String,
    required:true
  },
  desc:{
    type:String,
    required:true
  },

name:{
      type:String,
      },
 email:{
        type:String,
       
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Post = mongoose.model('Post', PostSchema);