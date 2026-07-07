import { useContext } from "react";
import { LangContext } from "./Context/LangContext";
const App = () => {
  const { lang, toggleLang } = useContext(LangContext);
  return (
    <div className="container">
      {lang === "en" ? <h2>Language switcher App</h2> : <h2>भाषा परिवर्तक</h2>}

      {lang === "en" ? (
        <button
          onClick={() => {
            toggleLang();
          }}
        >
          Switch Language to Hindi
        </button>
      ) : (
        <button
          onClick={() => {
            toggleLang();
          }}
        >
          English भाषा में स्विच करें
        </button>
      )}
    </div>
  );
};

export default App;
