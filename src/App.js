import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Favourite from './Pages/Favourite/Favourite.jsx';
import ProductDetail from './Pages/ProductDetail/ProductDetail.jsx';
import Blogs from './Pages/Blogs/Blogs.jsx';
import TrackOrder from './Pages/TrackOrder/TrackOrder.jsx';

import Header from './Components/Header/Header.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'

import "./App.css"

const PageLayout = ({ children }) => (
  <>
    <Header />
    <Navbar />
    {children}
    <Footer />
  </>
);


const App = () => {

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout><Home /></PageLayout>} />
          <Route path="/about" element={<PageLayout><About /></PageLayout>} />
          <Route path="/favourite" element={<PageLayout><Favourite /></PageLayout>} />
          <Route path="/products/:id/details" element={<PageLayout><ProductDetail /></PageLayout>} />
          <Route path="/blogs" element={<PageLayout><Blogs /></PageLayout>} />
          <Route path="/order/track" element={<PageLayout><TrackOrder /></PageLayout>} />

        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;