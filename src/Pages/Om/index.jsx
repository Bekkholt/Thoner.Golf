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
          <p className="text-color karla-text text-l sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1">
            Heidi er utdannet PGA Coach gjennom Høgskolen i Innlandet, Norges
            Golfforbund (trenerløypa; trener 1,2 og 3) og PGA Norge.
          </p>
          <p className="text-color karla-text text-l sm:w-32 md:w-2/4 lg:w-2/4 pb-6 px-1">
            Hun har erfaring med en bred spillergruppe og har jobbet med
            spillere i alle aldre og innenfor de fleste handicap-grupper.
          </p>
          <p className="text-color karla-text text-l sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1">
            Heidi har i flere år jobbet med barn og unge, nybegynnere og
            viderekomne spillere, der fokuset ligger på nysgjerrighet og
            mestring.
          </p>
          <p className="text-color karla-text text-l sm:w-32 md:w-2/4 lg:w-2/4 px-1">
            I leksjonene vil det være et fokus på å finne den beste veien til
            mål sammen, de beste svarene ligger i et godt samarbeid mellom
            trener og spiller.
          </p>
          <S.PGA>
            <h1 className="bebas-neue-regular text-color text-3xl">
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
          className="pb-5 sm:w-32 md:w-32 lg:w-48"
          height={200}
          width={200}
        ></img>
        <img
          alt="Heidi2"
          src={Heidi2}
          className="sm:w-32 md:w-32 lg:w-48"
          height={200}
          width={200}
        ></img>
      </S.ImageContent>
    </S.OuterDiv>
  );
}
