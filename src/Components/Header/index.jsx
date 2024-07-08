import * as S from "./index.styles";

export default function Header() {
  return (
    <S.Wrapper>
      <S.Header>
        <h1 className="bebas-neue-regular text-color text-4xl pl-5">
          thoner.golf
        </h1>
        <S.Pages>
          <p className="jura-text text-color px-5 text-l">Om</p>
          <p className="jura-text text-color px-5 text-l">FAQ</p>
          <p className="jura-text text-color px-5 text-l">Timer og priser</p>
        </S.Pages>
      </S.Header>
    </S.Wrapper>
  );
}
