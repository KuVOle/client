import LoginPage from "../pages/login_page/LoginPage";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./publicRoutes";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<LoginPage />} />
      {publicRoutes.map(({ path, Component }) => (
        <Route path={path} element={Component} />
      ))}
    </Routes>
  );
};

export default AppRouter;
