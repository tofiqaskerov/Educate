import { BASE_URL } from "../../config/api"
import {GET_ALL} from "../constants/CourseCategoryConstants" 
export const getCourseCategoryActions = () => async (dispatch,getState) =>{

    let result = await (await fetch(`${BASE_URL}/coursecategory/getall`)).json()

    console.log(result)
    dispatch({
        type: GET_ALL,
        payload: result.data
    })
}