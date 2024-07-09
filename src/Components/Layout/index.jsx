import * as S from "./index.styles";
import Header from "../Header";
import Footer from "../Footer";
import Hjem from "../../Pages/Hjem";

export default function Layout() {
  return (
    <S.Pagewrapper>
      <Header />
      <Hjem />
      <S.Body />
      <Footer />
    </S.Pagewrapper>
  );
}
