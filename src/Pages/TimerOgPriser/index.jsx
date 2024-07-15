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
          <h2 className="text-color karla-text-bold pl-5">Type time</h2>
          <p className="text-color karla-text text-l w-50 pb-5 px-5">
            Et par avsnitt her om hvem Heidi er og hva Heidi gjør og kan tilby
            av ditt og datt.
          </p>
          <h2 className="text-color karla-text-bold pl-5">Type time</h2>
          <p className="text-color karla-text text-l w-50 pb-5 px-5">
            Et par avsnitt her om hvem Heidi er og hva Heidi gjør og kan tilby
            av ditt og datt.
          </p>
          <h2 className="text-color karla-text-bold pl-5">Type time</h2>
          <p className="text-color karla-text text-l w-50 px-5">
            Et par avsnitt her om hvem Heidi er og hva Heidi gjør og kan tilby
            av ditt og datt.
          </p>
        </div>
      </S.TextContent>
      <S.ButtonDiv>
        <Link to="../Bestill time">
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
