import type { TaskModel } from "./taskModel";

export type TaskStartModel = {
  tasks : TaskModel[];
  secondsRemaining : number;
  formattedSecondsRemaning : string;
  activeTask : TaskModel | null;
  currentCyCle:  number;
  config : {
    workTime : number;
    shortBreakTime: number;
    longBreakTime: number;
  }
}