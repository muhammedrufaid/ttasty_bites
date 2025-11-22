import OurProducts from "../components/OurProducts";
import OurGallery from "../components/OurGallery";
// import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div className="">
      <div className="py-[40px] md:py-[70px]">
        <OurProducts />
      </div>
      <div>
        <OurGallery />
      </div>
      {/* <div className="py-[40px] md:py-[70px">
        <Newsletter />
      </div> */}
      <div className="flex gap-4 container mx-auto">
        <div className="flex-1 bg-red-200 h-64"></div>
        <div className="flex-1 bg-blue-200 h-64"></div>
      </div>
      
    </div>
  );
};

export default Home;
