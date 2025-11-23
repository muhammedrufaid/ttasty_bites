import React from "react";
import { motion } from "framer-motion";
import {  WhatsappIcon } from "../Icons";

const Footer: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.12 },
    },
  };


  const whatsappLink =
    "https://wa.me/+919567329623?text=Hello%21%20I%27d%20like%20to%20inquire%20about%20your%20Honey%20Mixed%20Nuts%20%28Tasty%20Bites%29.%20Can%20you%20provide%20more%20information%20about%20the%20product%3F";

  return (
    <>
      <motion.div
        className="grid grid-cols-12 gap-[50px] max-md:gap-[20px_0] bg-[#8D4819] p-[60px_120px] max-2xl:p-[60px_100px] max-md:p-[40px_20px]"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* <motion.div
          className="col-span-5 max-md:col-span-full flex flex-col items-start gap-[20px]"
          variants={col}
        >
          <div>
            <img src={LogoWhite} alt="LogoWhite" className="w-full h-[78px]" />
          </div>
          <motion.p
            className="text-[18px] max-2xl:text-[16px] max-md:text-[14px] text-white max-w-[400px]"
            variants={item}
          >
            Blue Diamond Tourism LLC offers personalized travel experiences with
            customized itineraries and expert-guided tours in Dubai, Oman, and
            India.
          </motion.p>
        </motion.div> */}

        {/* <motion.div className="col-span-2 max-md:col-span-full" variants={col}>
          <motion.h6
            className="text-[20px] max-2xl:text-[18px] max-md:text-[16px] text-white mb-[10px] font-medium"
            variants={item}
          >
            Quick Links
          </motion.h6>
          <div className="flex flex-col gap-[5px]">
            {navigationData.map((nav) => (
              <motion.div key={nav.id} variants={item}>
                <Link
                  to={nav.path}
                  className="w-fit text-[18px] max-2xl:text-[16px] max-md:text-[14px] text-white hover:text-gray-200"
                >
                  <span>{nav.title}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* <motion.div className="col-span-2 max-md:col-span-full" variants={col}>
          <motion.h6
            className="text-[20px] max-2xl:text-[18px] max-md:text-[16px] text-white mb-[10px] font-medium"
            variants={item}
          >
            Top Activity
          </motion.h6>
          <div className="flex flex-col gap-[5px]">
            {ServicesList.slice(0, 7).map((svc) => (
              <motion.div key={svc.id} variants={item}>
                <Link
                  to={`/services/${svc.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^\w\s]/gi, "-")}`}
                  className="w-fit text-[18px] max-2xl:text-[16px] max-md:text-[14px] text-white hover:text-gray-200 capitalize"
                >
                  <span>{svc.title.toLowerCase()}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* <motion.div className="col-span-3 max-md:col-span-full" variants={col}>
          <motion.h6
            className="text-[20px] max-2xl:text-[18px] max-md:text-[16px] text-white mb-[10px] font-medium"
            variants={item}
          >
            Contact Us
          </motion.h6>
          <div className="flex flex-col gap-[10px]">
            {contactData.map((c) => (
              <motion.div key={c.id} variants={item}>
                <a
                  href={c.path}
                  target="_blank"
                  className="flex items-center gap-[6px] w-auto text-[18px] max-2xl:text-[16px] max-md:text-[14px] text-white stroke-white hover:text-gray-200"
                >
                  <div>{c.icon}</div>
                  <p className="w-fit">{c.title}</p>
                </a>
              </motion.div>
            ))}
          </div>

          <motion.h6
            className="text-[20px] max-2xl:text-[18px] max-md:text-[16px] text-white m-[20px_0_10px] font-medium"
            variants={item}
          >
            Location
          </motion.h6>
          <div className="flex flex-col gap-[5px]">
            <motion.p
              className="flex items-start gap-[6px] w-fit text-[18px] max-2xl:text-[16px] max-md:text-[14px] text-white stroke-white"
              variants={item}
            >
              <LocationIcon
                className="w-[26px] max-2xl:w-[24px] max-md:w-[22px] h-fit aspect-square"
                stroke={1.8}
              />
              <span>
                City bay building, Abuhail, <br className="max-md:hidden" />
                Dubai, UAE
              </span>
            </motion.p>
          </div>
        </motion.div> */}
      </motion.div>

      <div className="w-full bg-[#8D4819] flex justify-center items-center p-[20px] border-t border-[rgba(255,255,255,0.50)]">
        <p className="text-[18px] max-2xl:text-[16px] max-md:text-[14px] text-white max-w-[400px]">
          2025 all rights reserved.
        </p>
      </div>

      {whatsappLink && (
        <div className="fixed bottom-[24px] right-[24px] z-50">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp quick chat"
            className="group inline-flex items-center animate-bounce justify-center w-[70px] h-[70px] max-md:w-[56px] max-md:h-[56px] rounded-full bg-[#25D366] shadow-lg shadow-black/20 ring-1 ring-black/10 hover:scale-105 transition-transform"
          >
            <WhatsappIcon
              className="w-[40px] h-[40px] max-md:w-[30px] max-md:h-[30px] stroke-white"
              stroke={1.5}
            />
          </a>
        </div>
      )}
    </>
  );
};

export default Footer;
