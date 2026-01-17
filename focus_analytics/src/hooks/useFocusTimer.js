import { useState, useEffect } from 'react';

export const useFocusTimer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0); // in seconds
  const [activityType, setActivityType] = useState('Study');
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('focus_sessions');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else if (!isRunning && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, timer]);

  useEffect(() => {
    localStorage.setItem('focus_sessions', JSON.stringify(history));
  }, [history]);

  const startSession = (type) => {
    setActivityType(type);
    setIsRunning(true);
    setTimer(0);
  };

  const stopSession = () => {
    setIsRunning(false);
    const newSession = {
      id: Date.now(),
      type: activityType,
      duration: timer, // duration in seconds
      date: new Date().toISOString(),
    };
    setHistory((prev) => [newSession, ...prev]);
    setTimer(0);
  };

  const deleteSession = (id) => {
    setHistory(history.filter((session) => session.id !== id));
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return {
    isRunning,
    timer,
    activityType,
    history,
    startSession,
    stopSession,
    deleteSession,
    formatTime,
  };
};
