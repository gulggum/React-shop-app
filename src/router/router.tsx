import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import FashionPage from "../pages/FashionPage";
import AccessoryPage from "../pages/AccessoryPage";
import DigitalPage from "../pages/DigitalPage";
import MainLayout from "../pages/MainLayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/fashion" element={<FashionPage />} />
        <Route path="/accessory" element={<AccessoryPage />} />
        <Route path="/digital" element={<DigitalPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
