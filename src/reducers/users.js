
const users = (state = {isLoading: false, error:'', data: [], aSort: true, dSort: false, search: [], isSearch: false}, action) => {   
   switch(action.type) {
       case 'REQUEST_USERS_START':
          return {
             ...state,
             isLoading: true
          };
       case 'REQUEST_USERS_SUCCESS':
          return {
             ...state,
             isLoading: false,
             data: action.users,
          };

       case 'REQUEST_USERS_FAIL':
           return {
              ...state,
              isLoading: false,
              error: action.error
           };

      case 'ASORT' : 
         return {
            ...state,
            data: [...state.data.sort((a,b) => a.fname.localeCompare(b.fname))],
            aSort: false,
            dSort: true
         };

      case 'DSORT':
      return {
         ...state,
         data: [...state.data.sort((a,b) => b.fname.localeCompare(a.fname))],
         aSort: true,
         dSort: false
      }
      
      case 'SEARCH': 
      let arr = [];
      if (action.keywords === ''){
        return  {
           ...state,
           isSearch: false
        }  
      } 
      else {
        state.data.forEach(ele => {
            if (ele.fname.includes(action.keywords) || ele.lname.includes(action.keywords)|| ele.sex.includes(action.keywords)) {
                arr.push(ele);
         }
        }) 
        return {
            ...state,
           // search :  searchData,
            search: arr,
            isSearch: true,
           
         }
      }
     

       default:
          return state;
   }
}

export default users;