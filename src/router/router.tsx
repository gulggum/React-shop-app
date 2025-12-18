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
        <Route path="/clothing" element={<FashionPage />} />
        <Route path="/jewelery" element={<AccessoryPage />} />
        <Route path="/electronics" element={<DigitalPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
