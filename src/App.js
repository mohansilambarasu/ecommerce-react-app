import React from "react";
import Loading from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./context/shopcontext";

const App = () => {
  return (
    <>
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/ecommerce-react-app/" element={<Shop />} />
            <Route path="/ecommerce-react-app/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </>
  );
};

export default App;
