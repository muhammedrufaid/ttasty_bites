import React from "react";
import { motion } from "framer-motion";

const AboutUsSection: React.FC = () => {
  const container = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
        when: "beforeChildren" as const,
        staggerChildren: 0.12,
      },
    },
  };

  const leftItem = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const rightItem = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <div className=" grid grid-cols-12 gap-[60px] max-md:gap-[30px_0] items-center ">
      <motion.div
        className="col-span-6 max-md:col-span-full"
        variants={rightItem}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Put an <img> here when you have the asset in Vite, e.g.: */}
        <img src="/images/Shop-list-img11.png" alt="AboutHomeImg" className="w-full" />
      </motion.div>

      <motion.div
        className="col-span-6 max-md:col-span-full flex flex-col gap-[10px]"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          //   className="text-[46px] max-2xl:text-[40px] max-md:text-[22px] text-white font-medium"
          className="font-heading uppercase font-bold text-[40px] md:text-[48px] leading-[40px] text-heading"
          variants={leftItem}
        >
          Newsletter sign up
        </motion.h2>
        <motion.p
          className="text-[18px] max-2xl:text-[16px] max-md:text-[14px]"
          variants={leftItem}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </motion.p>
        <motion.div className="mt-[20px] max-md:mt-[15px]" variants={leftItem}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col md:flex-row w-full max-w-xl"
          >
            <input
              type="email"
              required
              placeholder="Email Address"
              className="
                font-body text-[16px]
                border border-[#d3c7b7]
                bg-white
                px-4 md:px-6
                py-3 md:py-4
                outline-none
                w-full
              "
            />
            <button
              type="submit"
              className="
                mt-3 md:mt-0
                cursor-pointer
                md:w-[180px]
                bg-[#8D4819]
                text-white
                font-heading uppercase font-bold text-[14px] tracking-[0.15em]
                px-6 md:px-8
                py-3 md:py-4
                hover:bg-[#A75A22]
                transition-colors
              "
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUsSection;
