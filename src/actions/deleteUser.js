import axios from 'axios';
import { getUsers } from './users';
const API_URL = 'http://localhost:8888/api/deleteUser/';

function requestStart() {
    return {
      type: 'REQUEST_DELETE_USERS_START',
    };
  }

  // function requestSuccess(response) {
  //   return {
  //     type: 'REQUEST_DELETE_USERS_SUCCESS',
  //     data: response.data,
  //   };
  // }

  function requestFail(error) {
    return {
      type: 'REQUEST_DELETE_USERS_FAIL',
      error,
    };
  }

  export function deleteUser(id) {
    //console.log(API_URL + id);
    return (dispatch, getState) => {
      dispatch(requestStart());
      axios
        .delete(API_URL + id)
        .then(response => {
          console.log(response);
          dispatch(getUsers());
        })
        .catch(err => {
          dispatch(requestFail(err));
        });
    };
  }

  