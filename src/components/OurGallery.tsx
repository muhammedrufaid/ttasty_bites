import { motion } from "framer-motion";
import React from "react";

interface GalleryItem {
  id: number;
  imageUrl: string;
  altText: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    imageUrl: "/images/gallery/1.jpg",
    altText: "Delicious food item 1",
  },
  {
    id: 2,
    imageUrl: "/images/gallery/2.jpg",
    altText: "Delicious food item 2",
  },
  {
    id: 3,
    imageUrl: "/images/gallery/3.jpg",
    altText: "Delicious food item 3",
  },
  {
    id: 4,
    imageUrl: "/images/gallery/4.jpg",
    altText: "Delicious food item 4",
  },
  {
    id: 5,
    imageUrl: "/images/gallery/5.jpg",
    altText: "Delicious food item 5",
  },
  {
    id: 6,
    imageUrl: "/images/gallery/6.jpg",
    altText: "Delicious food item 6",
  },
];

const heading = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const OurGallery = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-12 items-center justify-center p-[80px_120px] max-2xl:p-[60px_100px] max-md:p-[80px_20px_40px] gap-2">
        <div className="col-span-12">
          <motion.h2
            className="font-heading uppercase font-bold text-[40px] max-xl:text-[32px] max-lg:text-[22px] mb-5 max-lg:mb-2.5 text-heading"
            variants={heading}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Our Gallery
          </motion.h2>
        </div>
       
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-10"> */}
        {galleryItems.map((item) => (
          <div key={item.id} className="overflow-hidden col-span-4 max-xl:col-span-6 max-md:col-span-12 aspect-12/8">
            <img
              src={item.imageUrl}
              alt={item.altText}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};
export default OurGallery;
