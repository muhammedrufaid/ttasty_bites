import OurProducts from "../components/OurProducts";
import OurGallery from "../components/OurGallery";
import Footer from "../components/common/Footer";
import NewsLetterSection from "../components/NewsLetterSection";
import Testimonials from "../components/Testimonials";
import ShopByBenefit from "../components/shopByBenefit";
import WhoWeAre from "../components/WhoWeAre";
import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <WhoWeAre />
      <ShopByBenefit />
      <OurGallery />
      <OurProducts />
      <Testimonials />

      <div className="p-[60px_120px] max-2xl:p-[0px_100px] max-md:p-[40px_20px]">
        <NewsLetterSection />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
