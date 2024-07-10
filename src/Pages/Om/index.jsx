import * as S from "./index.styles";
import Heidi1 from "../../Images/Screenshot 2024-07-10 112509.jpg";
import Heidi2 from "../../Images/Screenshot 2024-07-10 112331.jpg";
import PGA from "../../Images/Logo_CMYK_PGA_of_Norway.jpg";

export default function Om() {
  return (
    <S.OuterDiv>
      <S.TextContent>
        <h1 className="text-color jura-text text-2xl pb-5">Om</h1>
        <div>
          <p className="text-color karla-text text-l w-2/4 pb-2">
            Et par avsnitt her om hvem Heidi er og hva Heidi gjør og kan tilby
            av ditt og datt.
          </p>
          <p className="text-color karla-text text-l w-2/4">
            Et par avsnitt her om hvem Heidi er og hva Heidi gjør og kan tilby
            av ditt og datt.
          </p>
          <S.PGA>
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
          </S.PGA>
        </div>
      </S.TextContent>
      <S.ImageContent>
        <img
          alt="Heidi1"
          src={Heidi1}
          className="pb-5"
          height={200}
          width={200}
        ></img>
        <img alt="Heidi2" src={Heidi2} height={200} width={200}></img>
      </S.ImageContent>
    </S.OuterDiv>
  );
}
