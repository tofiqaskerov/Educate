import { GET_ALL } from "../constants/CourseCategoryConstants";

export const CourseCategoryReducer = (state = {category : []}, action) =>{
    switch (action.type){
        case GET_ALL:
            return{
                ...state,
                category : action.payload
            }
        default:
            return state;    

    }
}