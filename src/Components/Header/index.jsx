import * as S from "./index.styles";

export default function Header() {
  return (
    <S.Wrapper>
      <S.Header>
        <h1 className="bebas-neue-regular text-color text-4xl pl-2 pr-3">
          thoner.golf
        </h1>
        <S.Pages>
          <p className="jura-text text-color px-2 text-l">Om</p>
          <p className="jura-text text-color px-2 text-l">FAQ</p>
          <p className="jura-text text-color pl-2 pr-4 text-l">
            Timer og priser
          </p>
        </S.Pages>
      </S.Header>
    </S.Wrapper>
  );
}
