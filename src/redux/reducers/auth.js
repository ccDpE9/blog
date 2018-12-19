const initialState = {
  user: {},
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  if (action.type === "SET_USER") {
    return {
      ...state,
      isAuth: Object.keys(action.user).length > 0 ? true : false,
      user: action.user
    }
  }
  return state;
}

export default authReducer;
