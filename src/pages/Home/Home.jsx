
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../../components/Banner/Banner";
import Courses from "../../components/Courses/Courses";
import { getCourseCategoryActions } from "../../redux/actions/CourseCategoryActions";

// import Slider from "../components/Slider/Slider";
// import { getCoursesAction } from "../redux/actions/CourseActions";

function Home() {

    const {category} = useSelector((state) => state.category)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCourseCategoryActions())
    },[])


    console.log(category);
    return(
        <>
            <Banner />
            {
                category.map((cat,index) =>(
                    <Courses key={index} catId={cat.id} courseName={cat.name} />
                ))
            }
        </>
    )
}

export default Home;