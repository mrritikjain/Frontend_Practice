import { useFocusTimer } from "./hooks/useFocusTimer";
import SessionInput from "./components/SessionInput";
import ActiveSession from "./components/ActiveSession";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const {
    isRunning,
    timer,
    activityType,
    history,
    startSession,
    stopSession,
    deleteSession,
    formatTime,
  } = useFocusTimer();

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Focus Analytics 🧠</h1>
      </header>

      <main className="main-content">
        {isRunning ? (
          <ActiveSession
            timer={timer}
            activityType={activityType}
            onStop={stopSession}
            formatTime={formatTime}
          />
        ) : (
          <div className="home-layout">
            <SessionInput onStart={startSession} />
            <Dashboard
              history={history}
              deleteSession={deleteSession}
              formatTime={formatTime}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
