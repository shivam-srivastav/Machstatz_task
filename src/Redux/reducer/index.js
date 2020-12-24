//---------------------------------------------------//

import * as AT from "../Action/action_type";

const initialState = {
  data: "",
  favourite: [],
  open: "all-planet",
  loading: "true",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case AT.LOAD_DATA:
      return {
        ...state,
        data: action.data,
      };
    case AT.ADD_FAVOURITE:
      return {
        ...state,
        favourite: [...state.favourite, action.data],
      };
    case AT.REMOVE_FAVOURITE:
      return {
        ...state,
        favourite: [...state.favourite.filter((item) => item !== action.data)],
      };
    case AT.SET_OPEN:
      return {
        ...state,
        open: action.data,
      };
    case AT.SET_LOADING:
      return {
        ...state,
        loading: action.data,
      };
    default:
      return state;

    // if (AT.LOAD_DATA === action.type) {
    //   return Object.assign({}, state, { data: action.data });
    // }
    // if (AT.ADD_FAVOURITE === action.type) {
    //   return Object.assign({},state,{})
  }
  // if (action.type === ADD_ARTICLE) {
  //   return Object.assign({}, state, {
  //     articles: state.articles.concat(action.payload),
  //   });
  // }
  // if (action.type === ADD_CLICK) {
  //   return Object.assign({}, state, {
  //     click: state.click + 1,
  //   });
  // }
}

export default rootReducer;
