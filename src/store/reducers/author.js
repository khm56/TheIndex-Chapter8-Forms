import * as actionTypes from "../actions/actionTypes";

const initialState = {
  author: {},
  book: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_AUTHOR_DETAIL:
      return {
        ...state,
        author: action.payload
      };

    case actionTypes.POST_BOOK:
      return {
        ...state,
        book: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
