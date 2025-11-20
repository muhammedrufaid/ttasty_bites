import Home from "./pages/Home";

function App() {
  return (
    <>
      {/* <div className="min-h-screen bg-pagebg flex flex-col items-center justify-center">
        <span>Heading: Open Sans Condensed 700, 136px, line-height 113px</span>
        <h1 className="font-heading uppercase font-bold text-[40px] md:text-[48px] leading-[113px] text-heading text-center">
          Our products
        </h1>

       <span>Body: Open Sans 400, 18px, line-height 30px</span>
        <p className="mt-8 font-body font-normal text-[18px] leading-[30px] text-bodytext max-w-xl text-center">
          Check out our online shop for cute bee-themed apparel, unique bee
          suits, educational tools, gift certificates and more.
        </p>
      </div> */}

      <div className="relative">
        <Home />
      </div>
    </>
  );
}

export default App;
