import {
  GET_DECK_LIST_LOADING,
  GET_DECK_LIST_SUCCESS,
  GET_DECK_LIST_FAIL,
} from "../../Actions/actionTypes";

const initialState = {
  loading: false,
};

export default function deckReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DECK_LIST_FAIL:
      return {
        loading: false,
      };
    case GET_DECK_LIST_LOADING:
      return {
        loading: true,
      };
    case GET_DECK_LIST_SUCCESS:
      return {
        loading: false,
        deckList: action.payload,
      };
    default:
      return state;
  }
}
