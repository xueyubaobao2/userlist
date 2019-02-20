import axios from 'axios';
//import {getUsers} from './users';
const API_URL = 'http://localhost:8888/api/addUser';

function requestStart() {
    return {
      type: 'REQUEST_ADD_USERS_START',
    };
  }

  function requestSuccess(response) {
    return {
      type: 'REQUEST_ADD_USERS_SUCCESS',
      data: response.data,
    };
  }

  function requestFail(error) {
    return {
      type: 'REQUEST_ADD_USERS_FAIL',
      error,
    };
  }


  function addUser(fname, lname, sex, age, pwd, repwd, history) {
    return (dispatch, getState) => {
      dispatch(requestStart());
      axios
        .post(API_URL, 
           {
             fname,
             lname,
             sex,
             age,
             pwd,
             repwd
           }
        )
        .then(response => {
           dispatch(requestSuccess(response));
          //  dispatch(getUsers());
          //  history.push('./1');
           history.push('./');
        })
        // .then(response => {
        //   browserHistory.push('/');
        //  })
        .catch(err => {
          dispatch(requestFail(err));
        });
    };
  }

  export default addUser;