import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Archive from "./pages/Archive.jsx";
import Add from "./pages/Add.jsx";
import Detail from "./pages/Detail.jsx";
import NotFound from "./pages/NotFound.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import FloatingAddButton from "./components/FloatingAddButton.jsx";
import { getSystemPref } from "./hooks/usePrefersDark";

export default function App() {
  // theme state (persisted)
  const [theme, setTheme] = React.useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return getSystemPref() ? "dark" : "light";
  });

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <div className="app">
      <header className="app-header-wrapper container">
        <div className="app-header">
          <div className="brand">
            <div className="logo">N</div>
            <div>
              <div>Notes</div>
              <small>Personal React App</small>
            </div>
          </div>

          <nav className="nav">
            <NavLink to="/" end>
              Aktif
            </NavLink>
            <NavLink to="/archives">Arsip</NavLink>
          </nav>

          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/archives" element={<Archive />} />
          <Route path="/notes/new" element={<Add />} />
          <Route path="/notes/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <FloatingAddButton />
    </div>
  );
}
