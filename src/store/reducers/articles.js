import initialState from "../initialState";
import {
  CREATE_ARTICLE,
  ARTICLES_LOADING, 
  ARTICLES_LOADED,
  REMOVE_ARTICLE,
  Filters,
} from "./actions";

const { SHOW_ALL } = Filters;

export default function articlesReducer(state = initialState, action)
{
  switch (action.type) {
    case types.ARTICLES_LOADING:
      // @NOTE: You never write directly to states, but return new objects
      return {
        ...state,
        loading: action.isLoading
      };
    case types.ARTICLES_LOADED:
      return {
        ...state,
        articles: action.articles
      };
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
