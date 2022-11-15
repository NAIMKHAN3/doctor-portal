import { createBrowserRouter } from "react-router-dom";
import AppoinmentPage from "../AppoinmentPage/AppoinmentPage";
import Home from "../Home/Home/Home";
import LogIn from "../LogIn/LogIn";
import Main from "../Main/Main";
import SignUp from "../SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/home', element: <Home></Home>
            },
            {
                path: '/apoinment', element: <AppoinmentPage></AppoinmentPage>
            },
            {
                path: '/login', element: <LogIn></LogIn>
            },
            {
                path: '/signup', element: <SignUp></SignUp>
            }
        ]
    }
])


export default router;