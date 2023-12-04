import LoginPage from "../pages/login_page/LoginPage";
import RestorePasswordPage from "../pages/restore_password_page/RestorePasswordPage";

import { LOGIN_ROUTE, RESTORE_PASSWORD_ROUTE } from "./paths";

export const publicRoutes = [
  { path: LOGIN_ROUTE, Component: LoginPage },
  { path: RESTORE_PASSWORD_ROUTE, Component: RestorePasswordPage },
];
