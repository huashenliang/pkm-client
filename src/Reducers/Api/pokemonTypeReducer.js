import {
  GET_TYPE_LIST_LOADING,
  GET_TYPE_LIST_SUCCESS,
  GET_TYPE_LIST_FAIL,
} from "../../Actions/actionTypes";

const initialState = {
  loading: false,
};

export default function pokemonTypeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TYPE_LIST_FAIL:
      return {
        loading: false,
      };
    case GET_TYPE_LIST_LOADING:
      return {
        loading: true,
      };
    case GET_TYPE_LIST_SUCCESS:
      return {
        loading: false,
        pokemonTypes: action.payload,
      };
    default:
      return state;
  }
}
