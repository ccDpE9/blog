/*
 * --- ACTION TYPES ---
 */

// --- C
const CREATE_ARTICLE = "CREATE_ARTICLE";
const CREATE_ARTICLE_SUCCESS = "CREATE_ARTICLE_SUCCESS";
const CREATE_ARTICLE_FAIL = "CREATE_ARTICLE_FAIL";


// --- R
const FETCH_ARTICLES = "FETCH_ARTICLES";
const FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS";
const FETCH_ARTICLES_FAIL = "FETCH_ARTICLES_FAIL";

const FETCH_ARTICLE = "FETCH_ARTICLE";
const FETCH_ARTICLE_SUCCESS = "FETCH_ARTICLE_SUCCESS";
const FETCH_ARTICLE_FAIL = "FETCH_ARTICLE_FAIL";


// --- U
const UPDATE_ARTICLE = "UPDATE_ARTICLE";
const UPDATE_ARTICLE_SUCCESS = "UPDATE_ARTICLE_SUCCESS";
const UPDATE_ARTICLE_FAIL = "UPDATE_ARTICLE_FAIL";


// --- D
const DELETE_ARTICLE = "DELETE_ARTICLE";
const DELETE_ARTICLE_SUCCESS = "DELETE_ARTICLE_SUCCESS";
const DELETE_ARTICLE_FAIL = "DELETE_ARTICLE_FAIL";


// --- Filters
const Filters = {
  SHOW_ALL: "SHOW_ALL",
};


/* 
 * --- ACTION CREATORS ---
 */

// --- Bound action creators
const boundCreateArticle = text => dispatch(createArticle(text));
const boundArticlesAreLoading = (isLoading = true) => dispatch(articlesAreLoading(isLoading));
const boundArticlesAreLoaded = articles => dispatch(articlesAreLoaded());

 
// --- C
export function createArticle(text) {
  return {
    type: CREATE_ARTICLE,
    text
  }
};


// --- R
export function fetchArticles() {
  const request = axios({
    method: "get",
    url: "url",
    headers: []
  });

  return {
    type: FETCH_ARTICLES,
    payload: request
  }
};

export function fetchArticlesSuccess(articles) {
  return {
    type: FETCH_ARTICLES_SUCCESS,
    payload: articles
  };
};

export function fetchArticlesFail(err) {
  return {
    type: FETCH_ARTICLES_FAIL,
    payload: err
  };
};

export function fetchArticle() {
  const request = axios({
    method: "get",
    url: "url/id",
    headers: []
  });

  return {
    type: FETCH_ARTICLE,
    payload: request
  };
};

export function fetchArticlesSuccess(article) {
  return {
    type: FETCH_ARTICLE_SUCCESS,
    payload: article
  };
};

export function fetchArticleFail(err) {
  return {
    type: FETCH_ARTICLE_FAIL,
    payload: err
  };
};


// --- U
// --- D
