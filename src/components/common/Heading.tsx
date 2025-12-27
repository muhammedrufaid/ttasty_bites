type HeadingProps = {
  children: React.ReactNode;
  description?: string;
  className?: string;
};

const Heading = ({ children, description, className = "" }: HeadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2
        className={`font-heading uppercase font-bold text-[40px] max-xl:text-[32px] max-lg:text-[22px] mb-5 max-lg:mb-2.5 text-heading text-center ${className}`}
      >
        {children}
      </h2>

      {description && (
        <p className=" font-body font-normal text-[18px] leading-[30px] text-bodytext max-w-xl text-center">
          {description}
        </p>
      )}
    </div>
  );
};

export default Heading;