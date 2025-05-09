import "animate.css";
import logo from "../assets/lbrss.jpg";

function Header() {
  return (
    <div className="grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] animate__animated animate__fadeIn">
      <div className="text-2xl flex justify-start md:justify-end items-center order-2 md:order-1">
        Luke Barnes
      </div>
      <img
        src={logo}
        alt="Logo"
        className="h-20 mr-8 md:mx-8 order-1 md:order-2 row-span-2 md:row-span-1 place-self-end-safe"
      />
      <div className="text-2xl flex justify-start items-center order-3">
        Racket Stringing Services
      </div>
    </div>
  );
}

export default Header;
