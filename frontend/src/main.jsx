import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import HelmetProvider from "helmet";
import WishListProvider from "./context/WishListContext.jsx";
import BasketProvider from "./context/BasketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <WishListProvider>
    <BasketProvider>
      <App />
    </BasketProvider>
  </WishListProvider>
);
