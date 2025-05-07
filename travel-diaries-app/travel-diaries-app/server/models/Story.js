const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
  location: String,
  image: String
});

module.exports = mongoose.model('Story', StorySchema);
