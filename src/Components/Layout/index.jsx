import * as S from "./index.styles";
import { Routes, Route } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Hjem from "../../Pages/Hjem";
import Om from "../../Pages/Om";
import FAQ from "../../Pages/FAQ";
import TimerOgPriser from "../../Pages/TimerOgPriser";
import BestillTime from "../../Pages/BestillTime";

export default function Layout() {
  return (
    <S.Pagewrapper>
      <Header />
      <Routes>
        <Route index element={<Hjem />} />
        <Route path="../../Pages/Om" element={<Om />} />
        <Route path="../../Pages/FAQ" element={<FAQ />} />
        <Route path="../../Pages/TimerOgPriser" element={<TimerOgPriser />} />
        <Route path="../../Pages/BestillTime" element={<BestillTime />} />
      </Routes>
      <S.Body />
      <Footer />
    </S.Pagewrapper>
  );
}
