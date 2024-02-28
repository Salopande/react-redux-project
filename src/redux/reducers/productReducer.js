import { ActionType } from "../constant/action-type"

const initialState = {
    products:[]
}
export const productReducer = (state={initialState}, action) =>{
   switch(action.type){
    case ActionType.SET_PRODUCTS:
        return {...state,products:action.payload}
  
    case ActionType.SELECTED_PRODUCTS:
        return {...state, ...action.payload}
    default : return state
   }
}

export const selectedProductReducer = (state={}, action ) =>{
    switch(action.type){
        case ActionType.SELECTED_PRODUCTS:
            return {...state, ...action.payload}
        case ActionType.REMOVE_SELECTED_PRODUCT:
            return {}
        default : return state
    }
}