# Focus Analytics 🧠

A minimalist, high-performance productivity tracker built with React. Track your focus sessions, analyze habits, and gain insights—all without leaving your browser.

## ✨ Features

- **Activity Tracking**: Track different types of work (Study, Coding, Reading, Break).
- **Distraction-Free Timer**: A clean UI when the session is running to help you stay focused.
- **Persistent History**: Your data is saved automatically to `localStorage`, ensuring you never lose your progress even after a refresh.
- **Smart Dashboard**:
  - **Insights**: Automated feedback on your peak productivity times (Morning/Afternoon/Evening) and a "Focus Score" (Excellent/Good/Needs Improvement).
  - **Statistics**: Real-time metrics showing Total Sessions, Average Duration, and your Longest Session.

## 🛠️ Tech Stack

- **Core**: React 19 (Hooks: `useState`, `useEffect`, Custom Hooks)
- **Tooling**: Vite (Fast HMR & Build)
- **Styling**: Vanilla CSS (CSS Variables, Flex/Grid Layouts, Responsive Design)
- **State**: React Component State + `localStorage` for persistence

## 🚀 Getting Started

### Prerequisites

- Node.js installed (v16+ recommended).

### Installation

1. Navigate to the project directory:

   ```bash
   cd focus_analytics
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📂 Project Structure

```
focus_analytics/
├── src/
│   ├── components/
│   │   ├── ActiveSession.jsx   # Timer view when session is running
│   │   ├── Dashboard.jsx       # Stats, history, insights, and chart logic
│   │   └── SessionInput.jsx    # Form to start new sessions
│   ├── hooks/
│   │   └── useFocusTimer.js    # Core logic (timer management, local storage sync)
│   ├── App.jsx                 # Main layout and view router
│   └── main.jsx                # Application entry point
├── public/                     # Static assets
└── package.json                # Project dependencies and scripts
```

## 🧠 How It Works

1. **Start a Session**: Select an activity type (e.g., "Coding") from the dropdown and hit **Start Session**.
2. **Focus**: The interface switches to a dedicated timer view.
3. **Analyze**: When you click **Stop**, the session is logged to your history. The Dashboard updates immediately to reflect your new stats and recalculates your Focus Score based on your performance.

## 🔮 Future Roadmap

- [ ] Data Visualization Charts
- [ ] Goals & Daily Targets
- [ ] Dark/Light Mode Toggle
- [ ] Export Data to CSV

---

Built with specific focus on performance and simplicity.
