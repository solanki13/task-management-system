import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import ThemeContextProvider from "./context/ThemeContext";
import ToastProvider from "./components/ToastProvider";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <ToastProvider />
        <App />
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);