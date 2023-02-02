import {
  GET_DECK_LIST_LOADING,
  GET_DECK_LIST_SUCCESS,
  GET_DECK_LIST_FAIL,
} from "./actionTypes";

import { getDeckList } from "../Utils/api";

export const getDeckListAction = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_DECK_LIST_LOADING,
    });

    const res = await getDeckList();

    dispatch({
      type: GET_DECK_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_DECK_LIST_FAIL,
    });
  }
};
