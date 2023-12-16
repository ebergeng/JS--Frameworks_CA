import React from "react";
import Header from "./components/Header";
import { Routes, Route, Link, Outlet, BrowserRouter } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import LayOut from "./components/Layout";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <BrowserRouter>
        <LayOut>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="Contact" element={<ContactPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="*" element={<div>Route not found</div>} />
          </Routes>
        </LayOut>
    </BrowserRouter>
  );
}

export default App;
