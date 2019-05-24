/*
 * --- ACTION TYPES ---
 */

// --- C
const CREATE_ARTICLE = "CREATE_ARTICLE";

// --- R
const ARTICLES_LOADING = "ARTICLES_LOADING";
const LOAD_ARTICLES_SUCCESS = "LOAD_ARTICLES_SUCCESS";

// --- U

// --- D
const REMOVE_ARTICLE = "REMOVE_ARTICLE";

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
export function articlesAreLoading(isLoading = true) {
  return { type: types.ARTICLES_LOADING, isLoading };
};

export function articlesAreLoaded(articles) {
  return { type: types.LOAD_ARTICLES_SUCCESS, articles };
};

// --- U
// --- D
