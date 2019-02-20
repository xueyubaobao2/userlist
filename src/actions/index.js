export const search = (keywords,pageNum) => {
     return {
         type:'SEARCH',
         keywords,
         pageNum
     } 
}

export const aSort = (pageNum) =>  {
    return {
          type: 'ASORT',    
          pageNum
    }
 }

 export const dSort = (pageNum) => {
     return {
          type :'DSORT',
          pageNum
     }
 }

 export const pagination = (pageNum) => {
     return {
         type :'PAGINATION',
         pageNum,
     }
 }
    

