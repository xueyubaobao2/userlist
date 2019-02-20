const pagination = (state = {page: 1}, action) => {   
    switch(action.type) {
        case 'PAGINATION':
           return {
              ...state,
              page: action.pageNum,
           };
        default:
           return state;
    }
 }
 
 export default pagination;