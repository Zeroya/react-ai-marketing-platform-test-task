import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {TaskModel} from '../../models/task.model';

interface StateInterface {
  tasks: TaskModel[];
}

const initialState: StateInterface = {
  tasks: []
};

export const TasksSlice = createSlice({
  name: 'mainUserData',
  initialState,
  reducers: {
    addTasks: (state, action: PayloadAction<TaskModel[]>) => {
      state.tasks = action.payload;
    },
    createNewTask: (state, action: PayloadAction<TaskModel>) => {
      state.tasks.push(action.payload);
    }
  }
});

export const {addTasks, createNewTask} = TasksSlice.actions;

export default TasksSlice.reducer;
