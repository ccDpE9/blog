/*
 * --- ACTION TYPES ---
 */

// --- C
const CREATE_ARTICLE_REQUEST = "CREATE_ARTICLE_REQUEST";
const CREATE_ARTICLE_SUCCESS = "CREATE_ARTICLE_SUCCESS";
const CREATE_ARTICLE_FAILURE = "CREATE_ARTICLE_FAILURE";
// --- R
const FETCH_ARTICLES_REQUEST = "FETCH_ARTICLES_REQUEST";
const FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS";
const FETCH_ARTICLES_FAILURE = "FETCH_ARTICLES_FAILURE";
const FETCH_ARTICLE_REQUEST = "FETCH_ARTICLE_REQUEST";
const FETCH_ARTICLE_SUCCESS = "FETCH_ARTICLE_SUCCESS";
const FETCH_ARTICLE_FAILURE = "FETCH_ARTICLE_FAILURE";
// --- U
const UPDATE_ARTICLE_REQUEST = "UPDATE_ARTICLE_REQUEST";
const UPDATE_ARTICLE_SUCCESS = "UPDATE_ARTICLE_SUCCESS";
const UPDATE_ARTICLE_FAILURE = "UPDATE_ARTICLE_FAILURE";
// --- D
const DELETE_ARTICLE_REQUEST = "DELETE_ARTICLE_REQUEST";
const DELETE_ARTICLE_SUCCESS = "DELETE_ARTICLE_SUCCESS";
const DELETE_ARTICLE_FAILURE = "DELETE_ARTICLE_FAILURE";


/*
 * --- OTHER CONSTANTS ---
 */

export const Filters = {
  SHOW_ALL: "SHOW_ALL",
};


/* 
 * --- ACTION CREATORS ---
 */

function makeActionCreator(type, ...argNames) {
  return function(...args) {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action
  }
};


// --- C
export const createArticleRequest = makeActionCreator(CREATE_ARTICLE_REQUEST, "text");
// --- R
export const fetchArticlesRequest = makeActionCreator(FETCH_ARTICLES);
export const fetchArticlesSuccess = makeActionCreator(FETCH_ARTICLES_SUCCESS, articles);
export const fetchArticlesFailure = makeActionCreator(FETCH_ARTICLES_FAILURE, error);
export const fetchArticleRequest = makeActionCreator(FETCH_ARTICLE, article);
export const fetchArticleSuccess = makeActionCreator(FETCH_ARTICLE_SUCCESS, article);
export const fetchArticleFailure = makeActionCreator(FETCH_ARTICLE_FAILURE, error);
// --- U
export const updateArticleRequest = makeActionCreator(UPDATE_ARTICLE_REQUEST);
export const updateArticleSuccess = makeActionCreator(UPDATE_ARTICLE_SUCCESS, article);
export const updateArticleFailure = makeActionCreator(UPDATE_ARTICLE_FAILURE, error);
// --- D
export const deleteArticleRequest = makeActionCreator(DELETE_ARTICLE_REQUEST);
export const deleteArticleSuccess = makeActionCreator(DELETE_ARTICLE_SUCCESS);
export const deleteArticleFailure = makeActionCreator(DELETE_ARTICLE_FAILURE, error);


// --- Bound action creators
const bound{action} = (arg) => dispatch({action}(arg));
