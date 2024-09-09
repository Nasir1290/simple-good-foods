import { createBrowserRouter as Router } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";
import NotFound from "../components/general/NotFound";
import OurMenus from "../pages/OurMenus";
import FoodDetail from "../components/food/FoodDetails";
import MealPlans from "../pages/MealPlans";

const routes = Router([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/ourmenus",
        element: <OurMenus />,
      },
      {
        path: "/mealplans",
        element: <MealPlans />,
      },
      {
        path: "/food-details/:id",
        element: <FoodDetail />,
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
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
