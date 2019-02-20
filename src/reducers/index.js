import {combineReducers} from 'redux';
import users from './users';
import pagination from './pagination'
// import isSorted from './isSorted';
// import isFiltered from './isFiltered';
// import deleteUser from './deleteUser'
const reducers = combineReducers({
    users,
    //deleteUser
    pagination
});

export default reducers;