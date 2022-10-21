import { Route, Routes } from "react-router-dom";
import Courses from "../components/Courses/Courses";
import About from "../pages/About/About";
import CourseDetail from "../pages/CourseDetail/CourseDetail";
import Home from "../pages/Home/Home";


export default function MyRouter() {
  return (
    <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/courses" element={<Courses/>}/>
         <Route path="/detail/:id" element={<CourseDetail/>}/>
    </Routes>
  )
}
