import React, { useContext } from "react";
import { ThemeContext } from "./Context/Themecontext.jsx";
import "./App.css";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app-container ${theme}`}>
      <div className="card">
        <h2>Theme Switcher</h2>
        <div className="theme-status">
          Current Theme: <span className="theme-badge">{theme}</span>
        </div>
        <button className="toggle-btn" onClick={toggleTheme}>
          Switch to {theme === "light" ? "dark" : "light"} Mode
        </button>
      </div>
    </div>
  );
};

export default App;
