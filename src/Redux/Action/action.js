import axios from "axios";
import {
  LOAD_DATA,
  REMOVE_FAVOURITE,
  ADD_FAVOURITE,
  SET_OPEN,
  SET_LOADING,
  LOAD_FAIL,
} from "./action_type";
import store from "../Store/index";

export function fetch_data_from_api() {
  return (dispatch) => {
    axios
      .get("https://assignment-machstatz.herokuapp.com/planet")
      .then((res) => {
        console.log(res);
        dispatch(load_data(res.data));
        dispatch(set_loading(false));
      })
      .catch((err) => {
        dispatch(load_fail(err));
        dispatch(set_loading(false));
      });
    // console.log(data);
  };
}
export function favourite_toggle(data) {
  return (dispatch) => {
    const state = store.getState();
    !state.favourite.includes(data)
      ? dispatch(add_favourite(data))
      : dispatch(remove_favourite(data));
  };
}
export function load_data(data) {
  return { type: LOAD_DATA, data };
}
export function add_favourite(data) {
  return { type: ADD_FAVOURITE, data };
}
export function remove_favourite(data) {
  return { type: REMOVE_FAVOURITE, data };
}
export function set_open(data) {
  return { type: SET_OPEN, data };
}
export function set_loading(data) {
  return { type: SET_LOADING, data };
}
export function load_fail(data) {
  return { type: LOAD_FAIL, data };
}
