import * as S from "./index.styles";
import Golf from "../../Images/Screenshot 2024-07-12 102810.jpg";

export default function FAQ() {
  return (
    <S.OuterDiv>
      <S.TextContent>
        <h1 className="text-color jura-text text-2xl pb-8 pl-5">FAQ</h1>
        <div>
          <h2 className="text-color karla-text-bold pl-5">Spørsmål</h2>
          <p className="text-color karla-text text-l w-50 pb-5 px-5">
            Et par avsnitt her om hvem Heidi er og hva Heidi gjør og kan tilby
            av ditt og datt.
          </p>
          <h2 className="text-color karla-text-bold pl-5">Spørsmål</h2>
          <p className="text-color karla-text text-l w-50 pb-5 px-5">
            Et par avsnitt her om hvem Heidi er og hva Heidi gjør og kan tilby
            av ditt og datt.
          </p>
          <h2 className="text-color karla-text-bold pl-5">Spørsmål</h2>
          <p className="text-color karla-text text-l w-50 px-5">
            Et par avsnitt her om hvem Heidi er og hva Heidi gjør og kan tilby
            av ditt og datt.
          </p>
          <S.ImageDiv>
            <img
              alt="Golf ball on a field"
              src={Golf}
              className="p-5"
              height={500}
              width={500}
            ></img>
          </S.ImageDiv>
        </div>
      </S.TextContent>
    </S.OuterDiv>
  );
}
