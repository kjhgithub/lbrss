import logo_long from "./assets/logo_long.png";
import WhatsApp from "./assets/WhatsApp.svg";
import maps from "./assets/maps.svg";
import insta from "./assets/insta.svg";
import mail from "./assets/mail.svg";

function App() {
  return (
    <>
      <div className="text-white container mx-auto h-dvh flex flex-col justify-center items-center flex-nowrap gap-4">
        <img src={logo_long} alt="Logo" className="h-28" />
        <div className="">BA &#127992; SQ &#9899; TE &#57365;</div>
        <div className="flex flex-col text-center">
          <span>
            "ERFAHRENER SCHLÄGERBESAITER, LANGJÄRIGER SCHLÄGERSPORT-ENTHUSIAST"
          </span>

          <span>
            "EXPERIENCED RACKET STRINGER, LIFELONG RACKET SPORTS ADDICT"
          </span>
        </div>
        <div className="">&#128205; Köln, Deutschland</div>
        <div className="flex items-center justify-center gap-8 mt-10">
          <img src={maps} alt="" className="h-20 " />
          <img src={insta} alt="" className="h-20" />
          <img src={WhatsApp} alt="" className="h-20" />
          <img src={mail} alt="" className="h-20" />
        </div>
        <div className="mt-24">IMPRESSUM</div>
      </div>
    </>
  );
}

export default App;
