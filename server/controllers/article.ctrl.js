const Article = require('./../models/Article')


module.exports = {
  getAll: (req, res, next) => {
    Article.find(req.params.id)
      .populate('author').exec((err, article) => {
        if (err)
          res.send(err)
        else if (!article)
          res.send(404)
        else
          res.send(article)
        next()
      })
  },

  getArticle: (req, res, next) => {
    Article.findById(req.params.id)
      .populate('author').exec((err, article) => {
        if (err)
          res.send(err)
        else if (!article)
          res.send(404)
        else
          res.send(article)
        next()
      })
  },

  addArticle: (req, res, next) => {
    let newArticle = new Article({
      title: req.title,
      author: req.author_id,
      timestamp: req.timestamp,
      description: req.description,
      text: req.text
    });

    newArticle.save(function(err) => {
      if (err) return handleError(err);
    });
  }

}
