import React, { useState } from "react";

const SessionInput = ({ onStart }) => {
  const [type, setType] = useState("Study");

  return (
    <div className="card start-card">
      <h2>Start a Focus Session</h2>
      <div className="input-group">
        <label>Activity Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Study">Study</option>
          <option value="Coding">Coding</option>
          <option value="Break">Break</option>
          <option value="Reading">Reading</option>
        </select>
      </div>
      <button className="btn-primary" onClick={() => onStart(type)}>
        Start Session
      </button>
    </div>
  );
};

export default SessionInput;
