import {
  GET_TYPE_LIST_LOADING,
  GET_TYPE_LIST_SUCCESS,
  GET_TYPE_LIST_FAIL,
} from "./actionTypes";

import { getTypeList } from "../Utils/api";

export const getPokemonTypes = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_TYPE_LIST_LOADING,
    });

    const res = await getTypeList();

    dispatch({
      type: GET_TYPE_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_TYPE_LIST_FAIL,
    });
  }
};
