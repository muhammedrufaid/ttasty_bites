import { motion } from "framer-motion";
import { featuresData } from "../utils/data";

const ShopByBenefit = () => {
  const heading = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };
  const list = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { when: "beforeChildren", staggerChildren: 0.1 as const },
    },
  };
  const item = {
    hidden: { opacity: 0, x: -24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.45, ease: "easeOut" as const },
    },
  };
  //   const rightCol = {
  //     hidden: { opacity: 0, x: 24 },
  //     visible: {
  //       opacity: 1,
  //       x: 0,
  //       transition: { duration: 0.6, ease: "easeOut" as const },
  //     },
  //   };
  return (
    <div className="relative bg-[#1F1801] grid grid-cols-12 items-center justify-center p-[100px_120px] max-2xl:p-[80px_100px] max-md:p-[40px_20px]">

      <div className="absolute bottom-[-60px] max-md:bottom-[-70px] left-0 z-20">
        <img
          src="/images/nutsSack.png"
          alt="AboutHomeImg"
          className="w-[260px] max-2xl:w-[200px] max-xl:w-40 "
        />
      </div>
      <div className="col-span-12 relative z-30">
        <motion.h2
          className="font-heading uppercase font-bold text-[40px] max-xl:text-[32px] max-lg:text-[22px] text-heading text-center"
          variants={heading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <span className="text-white">Shop by </span><span className="text-[#ffb643]">Benefit</span>
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mt-[30px] md:mt-10 gap-[30px] md:gap-10"
          variants={list}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {featuresData.map((f) => (
            <motion.div
              key={f?.id}
              className="flex flex-col items-center text-center gap-3"
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className={`group flex justify-center items-center bg-[#ffb643] hover:bg-white w-[75px] h-[75px] rounded-[18px] transition-colors duration-300`}
              >
                <img
                  src={f?.icon}
                  alt={f?.title}
                  className="w-[45px] h-[45px] object-contain transition-transform duration-500 group-hover:scale-x-[-1]"
                />
              </div>
              <h6 className="text-white text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-medium">
                {f?.title}
              </h6>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ShopByBenefit;
