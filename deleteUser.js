// const deleteUser = (state = {isStart: false, data: "", err: ""}, action) => {
//      switch(action.type) {
//         case 'REQUEST_DELETE_USERS_START':
//             return {
//                 ...state,
//                 isStart: true
//             }
//          case 'REQUEST_DELETE_USERS_SUCCESS':
//             return {
//                 ...state,
//                 data: action.data,
//                 isStart: false
//             }
//           case 'REQUEST_DELETE_USERS_FAIL':
//              return {
//                  ...state,
//                  err : action.err
//              }
//           default:
//              return state;
//      }
// }

// export default deleteUser;