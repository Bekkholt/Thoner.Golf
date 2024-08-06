import * as S from "./index.styles";
import PGA from "../../Images/Logo_CMYK_PGA_of_Norway.jpg";
import { Link } from "react-router-dom";

export default function Hjem() {
  return (
    <div className="home-background">
      <S.MiddleContent>
        <p className="jura-text text-color text-4xl px-5 text-center">
          Føles svingen lei, eller går ballen feil vei?
        </p>
        <p className="jura-text text-color text-4xl pb-5 px-5 text-center">
          Book en time, så finner vi en løsning!
        </p>
        <Link to="/Pages/BestillTime">
          <button
            type="button"
            className="karla-text text-color bg-lime-900 hover:bg-lime-950 font-medium rounded-lg text-lg px-5 py-2.5 me-2 drop-shadow-2xl"
          >
            Bestill time
          </button>
        </Link>
      </S.MiddleContent>
      <S.BottomContent>
        <h1 className="bebas-neue-regular text-color text-3xl px-3">
          thoner.golf
        </h1>
        <img
          alt="PGA logo"
          src={PGA}
          className="px-3"
          height={65}
          width={65}
        ></img>
      </S.BottomContent>
    </div>
  );
}
