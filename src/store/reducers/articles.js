import initialState from "../initialState";
import {
  CREATE_ARTICLE,
  ARTICLES_LOADING, 
  ARTICLES_LOADED,
  REMOVE_ARTICLE,
  Filters,
} from "./actions";

const { SHOW_ALL } = Filters;


export default function articlesReducer(state = initialState, action) {
  switch (action.type) {
    // -- C
      
    // --- R
    case FETCH_ARTICLES:
      // @NOTE: You never write directly to states, but return new objects
      return { ...state, articles: [], error: null, loading: true };
    case FETCH_ARTICLES_SUCCESS:
      return { ...state, articles: action.payload, error: null, loading: false };
    case FETCH_ARTICLES_FAIL:
      return { ...state, articles: [], error: action.payload, loading: false };
    case FETCH_ARTICLE:
      return { ...state, article: null, error: null, loading: true };
    case FETCH_ARTICLE_SUCCESS:
      return { ...state, article: action.payload, error: null, loading: false };
    case FETCH_ARTICLE_FAIL:
      return { ...state, article: null, error: action.payload, loading: false };
    default:
      return state
  }
};

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
};
