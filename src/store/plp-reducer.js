let intialState = {
    products:[],
    searchString:'',
    filterString:''
}
const PLPReducer = (state=intialState,action) => {
    //debugger;
    switch(action.type){
        case 'GET_DATA': 
       /*  const newstate = Object.assign({},state);
        newstate.products=action.data
        state= newstate; */
        return {
            ...state,
            products:action.data
        }
        //return Object.assign({},state, {  products:  action.data })     
        
        case 'SEARCH_STRING':        
       /*  return {
            ...state,
            searchString:action.value
        } */
        return Object.assign({},state, {  searchString:  action.value })
        case 'FILTER_STRING':        
         return {
             ...state,
             filterString:action.value
         }
        //return Object.assign({},state, {  filterString:  action.value })     
        default: return state;
    }    
};
export default PLPReducer;