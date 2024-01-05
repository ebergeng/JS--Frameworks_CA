import React from "react";
import Header from "./components/layout/Header";
import { Routes, Route, Link, Outlet, BrowserRouter } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import LayOut from "./components/layout/Layout";
import ProductDetail from "./components/product/ProductDetail";
import CheckoutPage from "./pages/CheckoutPage";
import ProductPage from "./pages/ProductPage";

function App() {

  return (
    <BrowserRouter>
        <LayOut>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="Contact" element={<ContactPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="Cart" element={<CheckoutPage />} />
            <Route path="*" element={<div>Route not found</div>} />
          </Routes>
        </LayOut>
    </BrowserRouter>
  );
}

export default App;
