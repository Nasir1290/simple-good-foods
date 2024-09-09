import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
// import AuthProvider from "./providers/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"; 
import routes from "./routes/Routes.jsx";
import AuthProvider from "./components/provider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <AuthProvider>
        <RouterProvider router={routes}>
          <App />
        </RouterProvider>
          <ToastContainer />
      </AuthProvider>
    </NextUIProvider>
  </StrictMode>
);
