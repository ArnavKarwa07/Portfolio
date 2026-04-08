import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import PageTransition from "./components/PageTransition";
import LandingPage from "./pages/LandingPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import SkillsPage from "./pages/SkillsPage";

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <LandingPage />
            </PageTransition>
          }
        />
        <Route
          path="/experience"
          element={
            <PageTransition>
              <ExperiencePage />
            </PageTransition>
          }
        />
        <Route
          path="/projects"
          element={
            <PageTransition>
              <ProjectsPage />
            </PageTransition>
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <PageTransition>
              <ProjectDetailPage />
            </PageTransition>
          }
        />
        <Route
          path="/skills"
          element={
            <PageTransition>
              <SkillsPage />
            </PageTransition>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light",
  );
  const [themeSwitching, setThemeSwitching] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    setThemeSwitching(true);
    document.body.classList.add("theme-animating");

    const settle = setTimeout(() => {
      document.body.classList.remove("theme-animating");
    }, 500);

    const wipe = setTimeout(() => {
      setThemeSwitching(false);
    }, 520);

    return () => {
      clearTimeout(settle);
      clearTimeout(wipe);
    };
  }, [theme]);

  return (
    <div className={`app-shell ${themeSwitching ? "theme-switching" : ""}`}>
      <div className="theme-wipe" aria-hidden="true" />
      <SiteHeader
        theme={theme}
        onToggleTheme={() =>
          setTheme((current) => (current === "light" ? "dark" : "light"))
        }
      />
      <main className="page-shell">
        <AppRoutes />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
