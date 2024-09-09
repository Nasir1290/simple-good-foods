import { createBrowserRouter as Router } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";
import NotFound from "../components/general/NotFound";
import OurMenus from "../pages/OurMenus";
import FoodDetail from "../components/food/FoodDetails";
import MealPlans from "../pages/MealPlans";
import CateringPage from "../pages/CateringPage";
import HowItWorks from "../pages/HowItWorks";
import Testimonials from "../pages/Testimonials";
import Faq from "../components/home/Faq";
import UserProfile from "../components/user/UserProfile";
import CartDetails from "../pages/CartDetails";
import ProtectedRoute from "./ProtectedRoute";

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
      {
        path: "/catering",
        element: <CateringPage />,
      },
      {
        path: "/howitwork",
        element: <HowItWorks />,
      },
      {
        path: "/testimonial",
        element: <Testimonials />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/user-profile",
        element: <UserProfile />,
      },
      {
        path: "/cart-details",
        element: <ProtectedRoute element={<CartDetails/>} />,
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
