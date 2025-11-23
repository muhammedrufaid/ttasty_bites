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
    <div className="bg-[] grid grid-cols-12 gap-[60px] max-md:gap-[30px_0] items-center p-[60px_120px] max-2xl:p-[00px_100px] max-md:p-[40px_20px]">
      <motion.div
        className="col-span-6 max-md:col-span-full flex flex-col gap-[10px]"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="font-heading uppercase font-bold text-[40px] md:text-[48px] leading-[40px] text-heading"
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
          flavorful, and made with real, honest ingredients. That’s why our
          Honey Mixed Nuts are crafted using premium handpicked nuts, gently
          coated with pure honey to create the perfect blend of crunch and
          natural sweetness.
        </motion.p>
        <motion.p
          className="text-[18px] max-2xl:text-[16px] max-md:text-[14px]"
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
