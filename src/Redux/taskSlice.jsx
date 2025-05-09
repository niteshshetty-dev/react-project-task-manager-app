import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    toggleTask: (state, action) => {
      state.tasks = state.tasks.map((task) =>
        action.payload === task.id
          ? { ...task, completed: !task.completed }
          : task
      );
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => action.payload !== task.id);
    },
  },
});

export const { addTask, toggleTask, deleteTask, setTasks } = taskSlice.actions;
export default taskSlice.reducer;
