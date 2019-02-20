import axios from 'axios';
const API_URL = 'http://localhost:8888/api/users';

function requestStart() {
    return {
      type: 'REQUEST_USERS_START',
    };
  }

  function requestSuccess(response) {
    return {
      type: 'REQUEST_USERS_SUCCESS',
      users: response.data,
    };
  }

  function requestFail(error) {
    return {
      type: 'REQUEST_USERS_FAIL',
      error,
    };
  }

  export function getUsers() {
    return (dispatch, getState) => {
      dispatch(requestStart());
      axios
        .get(API_URL)
        .then(response => {
          //console.log(response);
          dispatch(requestSuccess(response));
        })
        .catch(err => {
          dispatch(requestFail(err));
        });
    };
  }