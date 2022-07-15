import React from "react";
import 'antd/dist/antd.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/header/Header";
import Category from "./Components/category/Category";
import Menu from "./Components/Menu/Menu";
import BrandSlider from "./Components/BrandSlider/BrandSlider";

// import BrandSlider from "./Components/BrandSlider/BrandSlider";


export default function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Menu />
      <Category />
      <BrandSlider />
      <Footer />
    </div>
  );
}
