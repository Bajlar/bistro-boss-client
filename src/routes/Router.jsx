import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Home/SignUp/SignUp";
import Secret from "../pages/Shared/Secret/Secret";
import PrivetRoute from "./PrivetRoute";
import DashBoard from "../mainLayout/DashBoard";
import MyCartList from "../pages/DashBoard/MyCartList/MyCartList";
import AllUsers from "../pages/DashBoard/MyCartList/AllUsers/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/secret",
        element: (
          <PrivetRoute>
            <Secret></Secret>
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <DashBoard></DashBoard>
      </PrivetRoute>
    ),
    children: [
      {
        path: "mycart",
        element: <MyCartList></MyCartList>,
      },
      {
        path: "allusers",
        element: <AllUsers></AllUsers>
      }
    ],
  },
]);

export default router;