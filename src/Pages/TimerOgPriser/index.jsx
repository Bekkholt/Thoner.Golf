import * as S from "./index.styles";
import { Link } from "react-router-dom";

export default function TimerOgPriser() {
  return (
    <S.OuterDiv>
      <S.TextContent>
        <h1 className="text-color jura-text text-2xl pb-8 pl-5">
          Timer og priser
        </h1>
        <div>
          <h2 className="text-color karla-text-bold pl-5">
            Leksjon 25 minutter: 300 kr
          </h2>
          <p className="text-color karla-text text-l w-50 pb-5 px-5">
            Anbefales som oppfølgingstime eller om man har et konkret område man
            ønsker å jobbe med.
          </p>
          <h2 className="text-color karla-text-bold pl-5">
            Leksjon 50 minutter: 550 kr
          </h2>
          <p className="text-color karla-text text-l w-50 pb-5 px-5">
            Anbefales ved førstegangsleksjon, og om man har et mer sammensatt
            fokusområde man ønsker å jobbe med. Kan også benyttes om man ønsker
            mer tid enn ved en 25 minutters leksjon.
          </p>
          <h2 className="text-color karla-text-bold pl-5">
            Leksjon på bane, 9 hull: 1300 kr
          </h2>
          <p className="text-color karla-text text-l w-50 pb-5 px-5">
            Dette er en leksjon der jeg blir med deg ut på banen, og bidra med
            rådgivning underveis, eller om man ønsker å fokusere på noe helt
            konkret.
          </p>
          <h2 className="text-color karla-text-bold pl-5">
            Treningsgruppe for damer: 100 kr per trening, eller klippekort 10
            treninger for 800 kr
          </h2>
          <p className="text-color karla-text text-l w-50 px-5">
            Påmelding skjer gjennom gruppen i SPOND-appen: Kode LHPPC
          </p>
        </div>
      </S.TextContent>
      <S.ButtonDiv>
        <Link to="/Pages/BestillTime">
          <button
            type="button"
            className="karla-text text-color bg-lime-900 hover:bg-lime-950 font-medium rounded-lg text-lg px-5 py-2.5 me-2 drop-shadow-2xl"
          >
            Bestill time
          </button>
        </Link>
      </S.ButtonDiv>
    </S.OuterDiv>
  );
}
