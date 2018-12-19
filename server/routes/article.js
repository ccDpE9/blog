const articlecontroller = require('./../controllers/article.ctrl')
const multipart = require('connect-multiparty')
const multipartWare = multipart()

module.exports = (router) => {
  router
    .route('/articles')
    .get(articlecontroller.getAll)

  router
    .route('/article/:slug')
    .get(articlecontroller.getArticle)


  router
    .route('/article')
    .post(multipartWare, articlecontroller.addArticle)
}
