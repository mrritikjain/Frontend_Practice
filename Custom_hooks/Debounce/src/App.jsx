import React from "react";
import { UseDebounce } from "./useDebounce";

const App = () => {
  const { debounce, setDebounce } = UseDebounce("hello", 300);
  return (
    <div>
      <input
        type="text"
        value={debounce}
        onChange={(e) => setDebounce(e.target.value)}
      />
      <p>Debounced value: {debounce}</p>
    </div>
  );
};

export default App;
