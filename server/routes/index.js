const article = require('./article')


// takes Express.Router instance
module.exports = (router) => {
  article(router)
}

