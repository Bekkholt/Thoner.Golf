import * as S from "./index.styles";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <S.Wrapper>
      <S.Header>
        <Link to="/">
          <h1 className="bebas-neue-regular text-color text-4xl pl-2 pr-3">
            thoner.golf
          </h1>
        </Link>
        <S.Pages>
          <Link to="../../Pages/Om">
            <p className="jura-text text-color px-2 text-l hover:text-slate-400">
              Om
            </p>
          </Link>
          <Link to="../../Pages/FAQ">
            <p className="jura-text text-color px-2 text-l hover:text-slate-400">
              FAQ
            </p>
          </Link>
          <Link to="../../Pages/Timer og priser">
            <p className="jura-text text-color pl-2 pr-4 text-l hover:text-slate-400">
              Timer og priser
            </p>
          </Link>
        </S.Pages>
      </S.Header>
    </S.Wrapper>
  );
}
