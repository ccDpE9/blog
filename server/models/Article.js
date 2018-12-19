const mongoose = require('mongoose')

// Schema interface allows to define fields and validation req
// Schemas are "compiled" into models using mongoose.model()

let ArticleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      maxlength: 255,
      required: True
    }
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: True
    },
    timestamp: { 
      type: Date,
      default: Date.now()
    },
    description: {
      type: String,
      required: True
    },
    text: {
      type: String,
      required: True
    }
  }
);

ArticleSchema.methods.addAuthor = function (author_id) {
  this.author = author_id
  return this.save()
}

module.exports = mongoose.model('Article', ArticleSchema)
