import { Route, Routes } from "react-router-dom";
import {
  SignInPage,
  NotFound,
} from "@/pages";

export const AppRoutes = () => {

  return (
    <Routes>
      {/* Rutas de autenticación */}
      <Route path="/" element={<SignInPage />} />

      {/* Rutas de estado */}
      <Route path="/notfound" element={<NotFound />} />

      {/* Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
