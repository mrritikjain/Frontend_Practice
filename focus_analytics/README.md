# Focus Analytics 🧠

A productivity application that helps users track focus sessions and gain insights into their work habits. Built with **React** and **pure JavaScript logic** (no external state libraries).

## 🚀 Features

- **Activity Tracking**: Categorize sessions (Study, Coding, Reading, Break).
- **Distraction-Free Timer**: Minimalist interface for active sessions.
- **Smart Dashboard**:
  - **Live Stats**: Total sessions, average duration, and personal bests.
  - **Auto-Insights**: Algorithmic feedback based on your history (e.g., _"You focus best in the Morning"_).
- **Persistence**: Sessions are saved to `localStorage`, so data survives page refreshes.

## 🛠️ Tech Stack

- **Frontend**: React (Hooks: `useState`, `useEffect`, Custom Hooks)
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (Variables, Flexbox/Grid, Dark Mode)
- **State Management**: React Component State & LocalStorage

## 🏗️ Implementation Details

### Custom Hook: `useFocusTimer`

The core logic is encapsulated in a custom hook that manages:

- The `setInterval` timer loop.
- Activity state transitions (Idle -> Running -> Saved).
- derived state calculations for the dashboard.

```javascript
// Example usage
const { isRunning, startSession, history } = useFocusTimer();
```

## 📦 How to Run

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```

## 🔮 Future Improvements

- [ ] **Data Visualization**: Add charts for weekly trends using `recharts`.
- [ ] **TypeScript Migration**: For better type safety and scalability.
- [ ] **Export Data**: Ability to download session history as CSV.
