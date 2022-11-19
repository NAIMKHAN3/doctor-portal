import { createBrowserRouter } from "react-router-dom";
import AppoinmentPage from "../AppoinmentPage/AppoinmentPage";
import AllUser from "../Deshboard/DeshboardLayout/AllUser/AllUser";
import DeshboardLayout from "../Deshboard/DeshboardLayout/DeshboardLayout";
import MyAppoinment from "../Deshboard/MyAppoinment/MyAppoinment";
import Home from "../Home/Home/Home";
import LogIn from "../LogIn/LogIn";
import Main from "../Main/Main";
import AdminRoute from "../PrivateRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
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
                path: '/apoinment', element: <PrivateRoute><AppoinmentPage></AppoinmentPage></PrivateRoute>
            },
            {
                path: '/login', element: <LogIn></LogIn>
            },
            {
                path: '/signup', element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/deshboard', element: <PrivateRoute><DeshboardLayout></DeshboardLayout></PrivateRoute>, children: [
            {
                path: '/deshboard', element: <PrivateRoute><MyAppoinment></MyAppoinment></PrivateRoute>
            },
            {
                path: '/deshboard/alluser', element: <AdminRoute><AllUser></AllUser></AdminRoute>
            }
        ]
    }
])


export default router;