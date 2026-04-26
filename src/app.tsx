import { useState } from 'react';
import type { TaskStartModel } from './models/taskStateModel';
import { Home } from './pages/homes/Home';
import './styles/global.css';
import './styles/theme.css';

const initialState: TaskStartModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaning: '00:00',
  activeTask: null,
  currentCyCle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15
  }
}

export function App() {
  const [state, setState] = useState(initialState);
  return (
    <>
      <Home state={state} setState={setState} />;
    </>
  );
}