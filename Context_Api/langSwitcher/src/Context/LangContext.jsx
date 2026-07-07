import { createContext, useState } from "react";

const LangContext = createContext();
const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const toggleLang = () => {
    setLang((Prev) => (Prev === "en" ? "hi" : "en"));
  };
  return (
    <LangContext.Provider value={{ lang: lang, toggleLang: toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};

export { LangContext, LangProvider };
