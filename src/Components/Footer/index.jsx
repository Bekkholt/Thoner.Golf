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
        <p className="karla-text text-color text-sm">Nettside fra:</p>
        <a href="https://bekkholt-portfolio.netlify.app/">
          <p className="mono-text text-color text-sm">Bekkholt</p>
        </a>
      </div>
      <div>
        <p className="karla-text text-color text-sm">Kontakt:</p>
        <a
          className="karla-text text-color text-sm"
          href="mailto:h_thoner@hotmail.com"
        >
          h_thoner@hotmail.com
        </a>
      </div>
    </S.Footer>
  );
}
