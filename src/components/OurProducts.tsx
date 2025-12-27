import Heading from "./common/Heading"
import { motion } from "framer-motion"

const OurProducts = () => {
  // Top-to-bottom animation (from OurGallery)
  const productItem = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  // Calculate row number for top-to-bottom animation
  // 3 items per row on large screens
  const getRowNumber = (index: number) => {
    return Math.floor(index / 3);
  };

  const products = [
    { id: 1, src: "/images/testimonial.jpg", alt: "Product 1" },
    { id: 2, src: "/images/testimonial.jpg", alt: "Product 2" },
    { id: 3, src: "/images/testimonial.jpg", alt: "Product 3" },
  ];

  return (
    <div className="p-[80px_120px] max-2xl:p-[60px_100px] max-md:p-[80px_20px_40px]">
      {/* <span>Heading: Open Sans Condensed 700, 136px, line-height 113px</span> */}

      <Heading description="Check out our online shop for cute bee-themed apparel, unique bee suits, educational tools, gift certificates and more.">
        Our products
      </Heading>

      <div className="grid grid-cols-4 items-center justify-center md:grid-cols-8 lg:grid-cols-12 gap-2 overflow-hidden mt-10">
        {products.map((product, index) => {
          const rowNumber = getRowNumber(index);
          return (
            <motion.div
              key={product.id}
              className="col-span-4 overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={productItem}
              transition={{
                duration: 0.6,
                ease: "easeOut" as const,
                delay: rowNumber * 0.15 + 0.2,
              }}
            >
              <img
                src={product.src}
                alt={product.alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:-translate-y-2"
              />
            </motion.div>
          );
        })}
      </div>


      {/* Body: Open Sans 400, 18px, line-height 30px
      <p className="mt-8 font-body font-normal text-[18px] leading-[30px] text-bodytext max-w-xl text-center">
        Check out our online shop for cute bee-themed apparel, unique bee
        suits, educational tools, gift certificates and more.
      </p> */}
    </div>
  )
}

export default OurProducts