import {combineReducers, configureStore, Reducer} from '@reduxjs/toolkit';
import taskState from './reducers/TasksSlice';

const rootReducer: Reducer<any> = combineReducers({
  taskState
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
