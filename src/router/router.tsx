import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ClothingPage from "../pages/ClothingPage";
import JewelryPage from "../pages/JewelryPage";
import DigitalPage from "../pages/DigitalPage";
import MainLayout from "../pages/MainLayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/clothing" element={<ClothingPage />} />
        {/* ┌> Fake Store API 오타  */}
        <Route path="/jewelery" element={<JewelryPage />} />
        <Route path="/electronics" element={<DigitalPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
