const mongoose = require('mongoose')

// Schema interface allows to define fields and validation req
// Schemas are "compiled" into models using mongoose.model()

let ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    maxlength: 255,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  timestamp: { 
    type: Date,
    default: Date.now()
  },
});

module.exports = mongoose.model('Article', ArticleSchema)
