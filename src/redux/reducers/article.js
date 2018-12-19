import {
  LOAD_ARTICLES,
  LOAD_ARTICLE,
  ADD_ARTICLE,
  EDIT_ARTICLE,
  DELETE_ARTICLE
} from "../actions"

const initialState = {
  title: '',
  author: '',
  timestamp: '',
  description: '',
  text: ''
}

const articleReducer = (state=initialState, action) => {
  switch(action.type) {
    case "LOAD_ARTICLES":
      return {
        ...state,
        articles: action.articles
      }
    case "LOAD_ARTICLE":
      return {
        ...state,
        article. action.article
      }
    case "ADD_ARTICLE":
      return [
        ...state,
        {
          title: action.title,
          author :action.author,
          timestamp: action.timestamp,
          description: action.description,
          text: action.text
        }
      ]
    case "EDIT_ARTICLE":
      return {}
    case "DELETE_ARTICLE":
      return article;
    default:
      return state
  }
}

