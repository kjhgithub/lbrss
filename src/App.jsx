import logo from "./assets/lbrss.jpg";

function App() {
  return (
    <>
      <div className="flex justify-center items-center mt-50 gap-x-8 mx-2">
        <img src={logo} alt="Logo" className="h-20" />
        <div className="text-2xl flex flex-col">
          <div className="">Luke Barnes</div>
          <div className="">Racket Stringing Services</div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-20 gap-x-8 mx-2">
        <div className="text-6xl font-semibold">Services</div>
        <div className="mt-4 text-justify w-full md:w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor.
        </div>
        <div className="flex flex-nowrap justify-between mt-20 w-full md:w-3xl mx-2">
          <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-blue-500"></div>
          <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-blue-500"></div>
          <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-blue-500"></div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
}

export default App;
