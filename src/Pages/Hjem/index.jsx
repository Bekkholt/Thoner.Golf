import * as S from "./index.styles";
import PGA from "../../Images/Logo_CMYK_PGA_of_Norway.jpg";
import { Link } from "react-router-dom";

export default function Hjem() {
  return (
    <div>
      <S.MiddleContent>
        <p className="jura-text text-color text-4xl pb-5 px-5 text-center">
          En liten setning om Heidi og hvem Heidi egentlig er!
        </p>
        <Link to="../Bestill time">
          <button
            type="button"
            className="karla-text text-color bg-lime-900 hover:bg-lime-950 font-medium rounded-lg text-lg px-5 py-2.5 me-2 drop-shadow-2xl"
          >
            Bestill time
          </button>
        </Link>
      </S.MiddleContent>
      <S.BottomContent>
        <h1 className="bebas-neue-regular text-color text-4xl px-3">
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
