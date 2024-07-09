import FacebookIcon from "../Icons/Facebook";
import InstagramIcon from "../Icons/Instagram";
import * as S from "./index.styles";

export default function Footer() {
  return (
    <S.Footer>
      <S.Icons>
        <a href="https://www.facebook.com/heidi.thoner">
          <FacebookIcon />
        </a>
        <a href="https://www.instagram.com/thonergolf/">
          <InstagramIcon />
        </a>
      </S.Icons>
      <div>
        <p className="karla-text text-color pl-9 text-sm">Kontakt:</p>
        <p className="karla-text text-color text-sm">+47 123456789</p>
      </div>
    </S.Footer>
  );
}
