import { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/context/ThemeProvider";
import { AppRoutes } from "./AppRoutes";
import { FullScreenLoader } from "./components/common";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Suspense fallback={<FullScreenLoader />}>
          <AppRoutes />
        </Suspense>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
