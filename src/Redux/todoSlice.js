import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  intialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, { payload }) => {
      state.push(payload);
    },
    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter(({ id }) => id !== payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
