import React from "react";
import Header from "../components/Common/Header";
import BannerArea from "../components/Home/BannerArea";
import PricingArea from "../components/Home/PricingArea";
import ProvidingService from "../components/Home/ProvidingService";
import AboutArea from "../components/Home/AboutArea";
import CounterUp from "../components/Home/CounterUp";
import Testimonials from "../components/Home/Testimonials";
import BlogArea from "../components/Home/BlogArea";
import SubscribeArea from "../components/Home/SubscribeArea";
import Footer from "../components/Common/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <BannerArea />
      <PricingArea />
      <ProvidingService />
      <AboutArea />
      <CounterUp />
      <Testimonials />
      <BlogArea />
      <SubscribeArea />
      <Footer />
      <div id="anywhere-home" class=""></div>
    </>
  );
};

export default Home;
