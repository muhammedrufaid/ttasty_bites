import OurProducts from "../components/OurProducts";
import OurGallery from "../components/OurGallery";
import Footer from "../components/common/Footer";
import NewsLetterSection from "../components/NewsLetterSection";
import Testimonials from "../components/Testimonials";
import ShopByBenefit from "../components/shopByBenefit";
import WhoWeAre from "../components/WhoWeAre";

const Home = () => {
  return (
    <>
      <div>
        <WhoWeAre />
      </div>

      <div className="bg-[#EBE8D4]">
        <div className="p-[60px_120px] max-2xl:p-[60px_100px] max-md:p-[40px_20px]">
          <ShopByBenefit />
        </div>
      </div>

      <div className="p-[60px_120px] max-2xl:p-[60px_100px] max-md:p-[40px_20px]">
        <OurGallery />
      </div>

      <div className="p-[60px_120px] max-2xl:p-[60px_100px] max-md:p-[40px_20px]">
        <OurProducts />
      </div>

      {/* testimonials */}
      <div className="p-[60px_120px] bg-[#EBE8D4] max-2xl:p-[60px_100px] max-md:p-[40px_20px]">
        <Testimonials />
      </div>

      <div className="p-[60px_120px] max-2xl:p-[0px_100px] max-md:p-[40px_20px]">
        <NewsLetterSection />
      </div>
      <Footer />
    </>
  );
};

export default Home;
