import React from "react";
import "./index.css";
import { useToggle } from "./useToggle";
const App = () => {
  const { isOpen, toggle } = useToggle();
  return (
    <>
      <div className="Toggle">
        <h2 onClick={() => toggle()}>
          {isOpen
            ? "Accordion content is showing"
            : "Accordion content is hide"}
        </h2>
        {isOpen && (
          <p>
            Accordion Content Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Reiciendis, deserunt.
          </p>
        )}
      </div>
    </>
  );
};

export default App;
