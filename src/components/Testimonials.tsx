import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialsData } from "../utils/data";
import { motion } from "framer-motion";
import { ArrowIcon } from "./Icons";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    // responsive: [
    // 	{
    // 		breakpoint: 1440,
    // 		settings: {
    // 			slidesToShow: 1,
    // 			slidesToScroll: 1,
    // 		},
    // 	},
    // 	{
    // 		breakpoint: 1024,
    // 		settings: {
    // 			slidesToShow: 1,
    // 			slidesToScroll: 1,
    // 		},
    // 	},
    // 	{
    // 		breakpoint: 600,
    // 		settings: {
    // 			slidesToShow: 1,
    // 			slidesToScroll: 1,
    // 		},
    // 	},
    // ],
  };

  const contentSliderRef = useRef<Slider>(null);

  const next = () => {
    contentSliderRef.current?.slickNext();
  };

  const previous = () => {
    contentSliderRef.current?.slickPrev();
  };

  return (
    <div className="bg-[#1F1801] p-[80px_120px] max-2xl:p-[60px_100px] max-md:p-[80px_20px_40px] overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          className="font-heading text-[#ffb643]! uppercase font-bold text-[40px] max-xl:text-[32px] max-lg:text-[22px] mb-8 lg:mb-12 max-lg:mb-6 text-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Testimonials
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12 w-full">
          <div className="w-full lg:w-auto flex justify-center lg:justify-start lg:flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative"
            >
              <img
                src="/images/preview.jpg"
                alt="Testimonial"
                className="w-full max-w-[280px] h-[280px] lg:w-[280px] lg:h-[280px] object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
          <div className="flex-1 w-full min-w-0 overflow-hidden">
            <Slider 
              ref={contentSliderRef} 
              {...settings} 
              className="w-full"
            >
              {testimonialsData.map((item) => (
                <div key={item?.id} className="flex flex-col gap-6 px-2 lg:px-4 w-full">
                  <div className="flex items-start gap-4">
                    <BiSolidQuoteAltLeft className="text-4xl lg:text-5xl text-[#ffb643] flex-shrink-0 mt-1" />
                  </div>
                  <div className="min-h-[120px] lg:min-h-[140px] flex items-start pt-2">
                    <p className="text-[18px] max-2xl:text-[16px] max-md:text-[15px] text-white leading-relaxed break-words">
                      {item?.testimonial}
                    </p>
                  </div>
                  <div className="pt-2">
                    <p className="text-[18px] max-2xl:text-[16px] max-md:text-[15px] text-[#ffb643] font-semibold">
                      {item?.author}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
            {/* <div className="flex items-center gap-4 mt-6 lg:mt-8">
              <button
                onClick={previous}
                className="p-2 rounded-full hover:bg-[#ffb643]/20 transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowIcon
                  className="w-6 h-6 rotate-180"
                  color="text-[#ffb643]"
                  stroke={2}
                />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-full hover:bg-[#ffb643]/20 transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowIcon
                  className="w-6 h-6"
                  color="text-[#ffb643]"
                  stroke={2}
                />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
