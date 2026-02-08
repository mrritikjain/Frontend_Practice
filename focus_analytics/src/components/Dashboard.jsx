import React from "react";

const Dashboard = ({ history, deleteSession, formatTime }) => {
  // Stats Calculation
  const totalSessions = history.length;

  const totalTimeSeconds = history.reduce(
    (acc, curr) => acc + curr.duration,
    0,
  );
  const averageTime =
    totalSessions > 0 ? Math.floor(totalTimeSeconds / totalSessions) : 0;

  const longestSession = history.reduce(
    (max, curr) => (curr.duration > max.duration ? curr : max),
    { duration: 0 },
  );

  // Simple Insight Logic
  const getFocusScore = () => {
    if (averageTime > 45 * 60) return "Excellent 🚀"; // > 45 mins
    if (averageTime > 25 * 60) return "Good 👍"; // > 25 mins
    return "Needs Improvement 🐢";
  };

  const getInsight = () => {
    if (totalSessions === 0) return "Start your first session to get insights!";

    return `Your focus score is ${getFocusScore()}.`;
  };

  return (
    <div className="dashboard">
      <div className="insights-panel">
        <h3>💡 Insights</h3>
        <p>{getInsight()}</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h4>Total Sessions</h4>
          <p>{totalSessions}</p>
        </div>
        <div className="stat-card">
          <h4>Avg Focus Time</h4>
          <p>{Math.floor(averageTime / 60)}m</p>
        </div>
        <div className="stat-card">
          <h4>Longest Session</h4>
          <p>{Math.floor(longestSession.duration / 60)}m</p>
        </div>
      </div>

      <div className="history-section">
        <h3>Recent History</h3>
        {history.length === 0 ? (
          <p className="empty-state">No sessions yet.</p>
        ) : (
          <ul className="history-list">
            {history.map((session) => (
              <li key={session.id} className="history-item">
                <div className="history-info">
                  <span className="history-type">{session.type}</span>
                  <span className="history-time">
                    {formatTime(session.duration)}
                  </span>
                  <span className="history-date">
                    {new Date(session.date).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                <button
                  className="btn-icon"
                  onClick={() => deleteSession(session.id)}
                  title="Delete"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
