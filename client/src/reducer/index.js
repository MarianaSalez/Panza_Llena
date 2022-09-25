
// Importa las actions types que necesites acá:
import {GET_ALL_RECIPES, SEARCH_BY_NAME, SEARCH_BY_DIET, GET_RANDOM, GET_DETAIL, CREATE_RECIPE, SORT, GET_DIETS,CHANGE_LOADING, CLEAN_FILTER} from "../actions";


const initialState = {
  loading: true,
  recipe:{},
  recipes: [],
  filtered:[],
  diets: [],
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
      // Acá va tu código:
      case GET_ALL_RECIPES:
        return {...state, recipes:action.payload}
      
      case SEARCH_BY_NAME:
        return {...state, recipes:action.payload, loading:false}
      
      case SEARCH_BY_DIET:
        return {...state, filtered:action.payload, loading:false}
      
      case GET_RANDOM:
        return {...state, recipe:action.payload, loading:false}

      case GET_DETAIL:
        return {...state, recipe:action.payload}
        
      case CREATE_RECIPE:
        return {...state, recipes: [...state.recipes, action.payload], loading:false}
     
      case CLEAN_FILTER:
        return {...state, filtered:[], loading:false}
      
      
        case SORT:
      const sorted =  state.recipes

      if (sorted.length!==0){
        if(action.payload === "ascHealth"){
          sorted.sort((a,b) =>a.healthScore- b.healthScore)
        }
        if(action.payload === "ascRate"){
          sorted.sort((a,b) =>a.score- b.score)
        }

        if(action.payload === "asc") {
        sorted.sort((a,b) =>{
          const nameA = a.name; 
          const nameB = b.name; 
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0
        })}
      if(action.payload === "des"){
        sorted.sort((a,b) =>{
          const nameA = a.name; 
          const nameB = b.name; 
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
          return 0
        })
      }
    }
      return {...state, recipes:sorted, loading:false}
      

      case GET_DIETS:
        return {...state, diets:action.payload}
      
      case CHANGE_LOADING:
        return {...state, loading:(!state.loading)}
    
      default:
        return state

     
  };
};

export default rootReducer;