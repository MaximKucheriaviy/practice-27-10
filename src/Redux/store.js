import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "Redux/todoSlice";

export const store = configureStore({
  reducer: todosReducer,
});
