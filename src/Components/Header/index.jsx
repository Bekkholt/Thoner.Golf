import * as S from "./index.styles";

export default function Header() {
  return (
    <S.Wrapper>
      <S.Header>
        <h1 className="bebas-neue-regular text-color text-4xl px-14">
          thoner.golf
        </h1>
        <S.Pages>
          <p className="jura-text text-color px-5 text-xl">Om</p>
          <p className="jura-text text-color px-5 text-xl">FAQ</p>
          <p className="jura-text text-color px-5 text-xl">Timer og priser</p>
        </S.Pages>
      </S.Header>
    </S.Wrapper>
  );
}
