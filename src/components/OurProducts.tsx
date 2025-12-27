import Heading from "./common/Heading"

const OurProducts = () => {
  return (
    <div className="p-[80px_120px] max-2xl:p-[60px_100px] max-md:p-[80px_20px_40px]">
      {/* <span>Heading: Open Sans Condensed 700, 136px, line-height 113px</span> */}

      <Heading description="Check out our online shop for cute bee-themed apparel, unique bee suits, educational tools, gift certificates and more.">
        Our products
      </Heading>

      <div className="grid grid-cols-4 items-center justify-center md:grid-cols-8 lg:grid-cols-12 gap-2 overflow-hidden mt-10">
        <div className="col-span-4 overflow-hidden">
          <img
            src="/images/testimonial.jpg"
            alt="Product 1"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:-translate-y-2"
          />
        </div>
        <div className="col-span-4 overflow-hidden">
          <img
            src="/images/testimonial.jpg"
            alt="Product 2"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:-translate-y-2"
          />
        </div>
        <div className="col-span-4 overflow-hidden">
          <img
            src="/images/testimonial.jpg"
            alt="Product 3"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:-translate-y-2"
          />
        </div>
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