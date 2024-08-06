import * as S from "./index.styles";
import Golf from "../../Images/Screenshot 2024-07-12 102810.jpg";

export default function FAQ() {
  return (
    <S.OuterDiv>
      <S.TextContent>
        <h1 className="text-color jura-text text-2xl pb-8 pl-5">FAQ</h1>
        <div>
          <h2 className="text-color karla-text-bold pl-5">
            Må jeg forberede noe før timen?
          </h2>
          <p className="text-color karla-text text-l w-50 pb-5 px-5">
            Det er greit å tenke gjennom hva du vil jobbe med. I tillegg
            anbefaler jeg å ha med noe å drikke, golf blir fort mer slitsomt enn
            man tror når man trener ;)
          </p>
          <h2 className="text-color karla-text-bold pl-5">
            Hvem kan ta pro-timer?{" "}
          </h2>
          <p className="text-color karla-text text-l w-50 pb-5 px-5">
            ALLE! Golf skal være gøy, og det blir fort frustrerende når det
            butter. Med en pro-time kan du få hjelp til å se hvilke deler av
            spillet/svingen som kan justeres på, og så legges det opp en plan
            for trening og progresjon videre om det er ønskelig.
          </p>
          <h2 className="text-color karla-text-bold pl-5">
            Må jeg ha eget utstyr?{" "}
          </h2>
          <p className="text-color karla-text text-l w-50 pb-5 px-5">
            Nei, om du kommer langveisfra, eller ikke har kjøpt deg eget utstyr,
            kan du låne kostnadsfritt. Det skal dog nevnes at eget utstyr er
            anbefalt.
          </p>
          <h2 className="text-color karla-text-bold pl-5">
            Kan jeg ha med noen til leksjonen?
          </h2>
          <p className="text-color karla-text text-l w-50 pb-5 px-5">
            Ja, det kan du, men for ditt eget fokus sin del kan det lønne seg å
            velge «selskap» med omhu. I leksjonen er det du som står i sentrum
            og det er din utvikling og mestring som er viktigst.
          </p>
          <h2 className="text-color karla-text-bold pl-5">
            Kan jeg ta pro-time sammen med fler?{" "}
          </h2>
          <p className="text-color karla-text text-l w-50 pb-5 px-5">
            Ja, ta kontakt på mail, så finner vi en løsning.
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
