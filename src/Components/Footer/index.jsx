import FacebookIcon from "../Icons/Facebook";
import InstagramIcon from "../Icons/Instagram";
import * as S from "./index.styles";

export default function Footer() {
  return (
    <S.Footer>
      <S.Icons>
        <FacebookIcon />
        <InstagramIcon />
      </S.Icons>
      <div>
        <p className="karla-text text-color pl-9 text-sm">Kontakt:</p>
        <p className="karla-text text-color text-sm">+47 123456789</p>
      </div>
    </S.Footer>
  );
}
