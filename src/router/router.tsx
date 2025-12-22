import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ClothingPage from "../pages/ClothingPage";
import JewelryPage from "../pages/JewelryPage";
import ElectronicsPage from "../pages/ElectronicsPage";
import MainLayout from "../pages/MainLayout";
import NotFound from "../pages/NotFound";
import ProductDetail from "../components/ProductsDetail";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/clothing" element={<ClothingPage />} />
        {/* ┌> Fake Store API 오타  */}
        <Route path="/jewelery" element={<JewelryPage />} />
        <Route path="/electronics" element={<ElectronicsPage />} />
        {/* 존재하지 않는 경로시 연결 */}
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
