import { Route, Routes } from "react-router-dom";
import { SignInPage, NotFound, DashboardPage } from "@/pages";
import { AppLayout } from "@/layout";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Rutas de autenticación */}
      <Route path="/" element={<SignInPage />} />

      {/* Rutas de páginas */}
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>

      {/* Rutas de estado */}
      <Route path="/notfound" element={<NotFound />} />

      {/* Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
