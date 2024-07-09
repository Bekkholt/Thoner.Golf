import * as S from "./index.styles";

export default function Hjem() {
  return (
    <div>
      <S.MiddleContent>
        <p className="jura-text text-color text-4xl pb-5">
          En liten setning om Heidi og hvem Heidi egentlig er!
        </p>
        <button
          type="button"
          className="karla-text text-color bg-lime-900 hover:bg-lime-950 font-medium rounded-lg text-lg px-5 py-2.5 me-2 
drop-shadow-2xl"
        >
          Bestill time
        </button>
      </S.MiddleContent>
      <S.BottomContent>
        <h1 className="bebas-neue-regular text-color text-4xl px-3">
          thoner.golf
        </h1>
        <img
          alt="PGA logo"
          href="../../Images/Logo_CMYK_PGA_of_Norway.jpg"
          className="px-3"
        ></img>
      </S.BottomContent>
    </div>
  );
}
