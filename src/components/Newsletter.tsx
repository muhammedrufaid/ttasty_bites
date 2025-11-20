const Newsletter = () => {
  return (
    <section className=" grid grid-cols-12 gap-12">
      <div className="col-span-12 md:col-span-6">
        <img
          src="/images/newsletter.png"
          alt="Beekeeping newsletter"
          height={621}
          width={595}
          loading="lazy"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
        <h2 className="font-heading uppercase font-bold text-[40px] md:text-[48px] leading-[40px] text-heading">
          Newsletter sign up
        </h2>
        <p className="mt-[10px] md:mt-[20px] font-body font-normal text-[18px] leading-[30px] text-bodytext max-w-xl ">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem
          dolores.
        </p>

        {/* email input and subscribe button need */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-[30px] flex flex-col md:flex-row w-full max-w-xl"
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
              bg-[#e06a23]
              text-white
              font-heading uppercase font-bold text-[14px] tracking-[0.15em]
              px-6 md:px-8
              py-3 md:py-4
              hover:bg-[#c85b1a]
              transition-colors
            "
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
