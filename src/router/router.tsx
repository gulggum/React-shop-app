import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ClothingPage from "../pages/ClothingPage";
import JewelryPage from "../pages/JewelryPage";
import ElectronicsPage from "../pages/ElectronicsPage";
import MainLayout from "../pages/MainLayout";
import NotFound from "../pages/NotFound";
import ProductDetail from "../components/ProductsDetail";
import CartPage from "../pages/CartPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:category/:id" element={<ProductDetail />} />
        <Route path="/clothing" element={<ClothingPage />} />
        {/* ┌> Fake Store API 오타  */}
        <Route path="/jewelery" element={<JewelryPage />} />
        <Route path="/electronics" element={<ElectronicsPage />} />
        <Route path="/cart" element={<CartPage />} />
        {/* 존재하지 않는 경로시 연결 */}
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
