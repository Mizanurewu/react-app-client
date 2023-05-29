import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AboutPage from "../Pages/AboutPage/AboutPage/AboutPage";
import CoursesPage from "../Pages/CoursesPage/CoursesPage/CoursesPage";
import ContactPage from "../Pages/ContactPage/ContactPage";

const router=createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<AboutPage></AboutPage>
            },
            {
                path:'/course',
                element:<CoursesPage></CoursesPage>
            },
            {
                path:'/contact',
                element:<ContactPage></ContactPage>
            }

        ]
    }
])
export default router;