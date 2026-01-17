import React from "react";

const ActiveSession = ({ timer, activityType, onStop, formatTime }) => {
  return (
    <div className="card active-card">
      <div className="pulsing-dot"></div>
      <h2>{activityType} in progress</h2>
      <div className="timer-display">{formatTime(timer)}</div>
      <button className="btn-danger" onClick={onStop}>
        Stop Session
      </button>
    </div>
  );
};

export default ActiveSession;
