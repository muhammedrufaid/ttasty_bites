import { motion } from "framer-motion";

const WhoWeAre = () => {
  const container = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
        when: "beforeChildren",
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
    <div className="relative grid grid-cols-12 gap-[60px] max-xl:gap-10 max-md:gap-[30px_0] items-center p-[80px_120px] max-2xl:p-[60px_100px] max-md:p-[100px_20px_40px]">
        <div className="absolute top-0 left-0 z-10">
          <img
            src="/images/whowearetop.png"
            alt="AboutHomeImg"
            className="w-[300px] max-2xl:w-[200px] max-xl:w-[120px] rotate-y-180"
          />
        </div>
        <div className="absolute bottom-[-60px] left-0 z-20">
          <img
            src="/images/honeydrop.png"
            alt="AboutHomeImg"
            className="w-[300px] max-2xl:w-[200px] max-xl:w-[140px] rotate-y-180"
          />
        </div>
        <div className="absolute bottom-[-30px] right-0 z-20">
          <img
            src="/images/whowearebottom.png"
            alt="AboutHomeImg"
            className="w-[300px] max-2xl:w-[200px] max-xl:w-[140px]"
          />
        </div>
      <motion.div
        className="relative z-30 col-span-6 max-md:col-span-full flex flex-col gap-2.5 max-lg:gap-1"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="font-heading uppercase font-bold text-[40px] max-xl:text-[32px] max-lg:text-[22px] text-heading"
          variants={leftItem}
        >
          Who We Are?
        </motion.h2>
        <motion.p
          className="text-[18px] max-2xl:text-[16px] max-md:text-[14px]"
          variants={leftItem}
        >
          Welcome to Tasty Bites, where nature’s finest ingredients meet pure,
          delicious craftsmanship. We believe that snacking should be wholesome,
          flavorful, and made with real, honest ingredients.
        </motion.p>
        <motion.p
          className="text-[18px] max-2xl:text-[16px] max-md:text-[14px] leading-[25px]"
          variants={leftItem}
        >
          At Tasty Bites, quality is at the heart of everything we do. From
          selecting the freshest nuts to ensuring every bite delivers
          exceptional taste, we take pride in offering a snack that is both
          nutritious and irresistible. Our mission is simple: to bring you
          snacks that not only satisfy your cravings but also fuel your day with
          natural goodness.
        </motion.p>
      </motion.div>
      <motion.div
        className="col-span-6 max-md:col-span-full"
        variants={rightItem}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <img
          src="/images/Shop-list-img11.png"
          alt="AboutHomeImg"
          className="w-full"
        />
      </motion.div>
    </div>
  );
};

export default WhoWeAre;
