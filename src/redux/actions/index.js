import axios from "axios";


export const LOAD_ARTICLES = 'LOAD_ARTICLES'
export const LOAD_ARTICLE = 'LOAD_ARTICLE'

export function loadArticles(articles) {
  return { type: LOAD_ARTICLES, articles }
}

export function loadArticle(article) {
  return { type: LOAD_ARTICLE, article }
}

/*
export function loadArticles() {
  return (dispatch) => {
    axios
      .get(`${url}articles`)
      .then(res => {
        let articles = res.data
        dispatch({ type: 'LOAD_ARTICLES', articles })
      })
      .catch(err => console.log(err))
  }
}
*/



// dispatch
// can be accessed directly from the store: store.dispatch()
// using helper: connect()
