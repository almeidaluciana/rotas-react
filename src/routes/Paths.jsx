import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Produto from "../pages/Products";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageLayout from "../layouts/PageLayout";
import NotFound from "../pages/NotFound";

const Paths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="/produtos" element={<Produto />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Paths;
