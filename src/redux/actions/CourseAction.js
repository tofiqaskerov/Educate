import {BASE_URL} from '../../config/api'
import { GET_COURSES, GET_COURSES_BY_ID } from '../constants/CourseConstants'

export const getCourseAction = () => async(dispatch, getState) =>{
    let courses = await (await fetch(`${BASE_URL}/course/getAll`)).json()
    dispatch({
        type: GET_COURSES,
        payload : courses.data
    })
}
export const getCourseByIdAction = (id) => async(dispatch, getState) =>{
    let courses = await (await fetch(`${BASE_URL}/course/get/${id}`)).json()
    dispatch({
        type: GET_COURSES_BY_ID,
        payload : courses.data
    })
}