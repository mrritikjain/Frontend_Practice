import { useContext } from "react";
import { ThemeContext } from "./themeContext";
import "./App.css";
const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="card">
      <h2>Current Theme is {theme}</h2>
      <button onClick={() => toggleTheme()}>
        Switch theme to {theme === "light" ? "dark" : "light"}
      </button>
    </div>
  );
};

export default App;
