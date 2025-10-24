import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import AuthProvider from "./Provider/AuthProvider";
import { ToastContainer } from "react-toastify";

import ThemeProvider from "./Provider/ThemeProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);
