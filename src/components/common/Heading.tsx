type HeadingProps = {
  children: React.ReactNode;
  description?: string;
  className?: string;
};

const Heading = ({ children, description, className = "" }: HeadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2
        className={`font-heading uppercase font-bold text-[40px] md:text-[48px] leading-[40px] text-heading text-center ${className}`}
      >
        {children}
      </h2>

      {description && (
        <p className="mt-[10px] md:mt-[20px] font-body font-normal text-[18px] leading-[30px] text-bodytext max-w-xl text-center">
          {description}
        </p>
      )}
    </div>
  );
};

export default Heading;