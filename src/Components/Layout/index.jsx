import * as S from "./index.styles";
import Header from "../Header";
import Footer from "../Footer";

export default function Layout() {
  return (
    <S.Pagewrapper>
      <Header />
      <S.Body />
      <Footer />
    </S.Pagewrapper>
  );
}
