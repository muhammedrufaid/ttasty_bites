import { motion } from "framer-motion";

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
    <>
      <div className="grid grid-cols-12 items-center justify-center ">
        <div className="col-span-12">
          <motion.h2
            className="font-heading uppercase font-bold text-[40px] md:text-[48px] leading-[40px] text-heading"
            variants={heading}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Our Gallery
          </motion.h2>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {galleryItems.map((item) => (
          <div key={item.id} className="overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.altText}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default OurGallery;
