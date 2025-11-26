import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialsData } from "../utils/data";
import { motion } from "framer-motion";
import { ArrowIcon } from "./Icons";

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

  const sliderRef = useRef<Slider>(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div className=" flex flex-col items-center gap-[30px]">
      <div className="flex flex-col bgTestimonials gap-[40px] w-full">
        <motion.h2
          className="font-heading uppercase font-bold text-[40px] md:text-[48px] leading-[40px] text-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Testimonials
        </motion.h2>

        <div className="flex flex-col gap-20">
          {testimonialsData.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                marginLeft: `${index * 80}px`, // Each testimonial shifts 80px to the right
              }}
            >
              <div className="flex items-start gap-4">
                <div className="p-1 bg-[#E1DCC6] rounded-full">
                  <img
                    src="/images/Shop-list-img11.png"
                    alt={testimonial.author}
                    className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-base text-gray-700 leading-relaxed">
                    "{testimonial.testimonial}"
                  </p>
                  <div>
                    <h3 className="font-bold text-lg text-heading">
                      {testimonial.author}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
          {/* <div className="col-span-8 w-full">
            <Slider ref={sliderRef} {...settings}>
              {testimonialsData.map((item) => (
                <motion.div
                  key={item?.id}
                  className="flex flex-col items-center w-full"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <p className="text-[18px] max-2xl:text-[16px] max-md:text-[14px] text-[#E8E8E8] text-center">
                    {item?.testimonial}
                  </p>
                  <div className="flex justify-center my-[30px] max-md:my-[20]">
                    <img
                      src="/images/Shop-list-img11.png"
                      alt="Client"
                      className="rounded-full w-[100px] aspect-square"
                    />
                  </div>
                  <p className="text-[18px] max-2xl:text-[16px] max-md:text-[14px] text-white text-center">
                    {item?.author}
                  </p>
                  <div></div>
                </motion.div>
              ))}
            </Slider>
          </div> */}
          
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img
            src="/images/Shop-list-img11.png"
            alt="QoutesIcon"
            className="w-[40px] h-[40px]"
          />
        </motion.div>  */}
      </div>
    </div>
  );
};

export default Testimonials;
