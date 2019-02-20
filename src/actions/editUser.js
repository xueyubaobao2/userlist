import axios from 'axios';
//import { getUsers } from './users';
const API_URL = 'http://localhost:8888/api/editUser/';

function requestStart() {
    return {
      type: 'REQUEST_EDIT_USERS_START',
    };
  }

  function requestSuccess(response) {
    return {
      type: 'REQUEST_EDIT_USERS_SUCCESS',
      users: response.data,
    };
  }

  function requestFail(error) {
    return {
      type: 'REQUEST_EDIT_USERS_FAIL',
      error,
    };
  }

  export function editUser(_id, fname, lname, sex, age, pwd, repwd, history) {
    console.log(API_URL + _id);
    return (dispatch, getState) => {
      dispatch(requestStart());
      axios
        .put(API_URL + _id,  
          {
          fname,
          lname,
          sex,
          age,
          pwd,
          repwd
        })
        .then(response => {
           dispatch(requestSuccess(response));
           //dispatch(getUsers());
          //  history.push('/1');
           history.push('/');
        })
        .catch(err => {
          dispatch(requestFail(err));
        });
    };
  }