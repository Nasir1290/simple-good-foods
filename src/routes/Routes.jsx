import { createBrowserRouter as Router } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";
import NotFound from "../components/general/NotFound";

const routes = Router([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path:"*",
    element:<NotFound/>
  }
]);

export default routes