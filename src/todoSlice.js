import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [], // Directly use an empty array as the initial state
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload }); // Add item directly to the array
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload); // Return a new state array without the removed item
    },
    removeAllTodos: () => {
      return []; // Reset state to an empty array
    },
  },
});

export const { addTodo, removeTodo, removeAllTodos } = todoSlice.actions;
export default todoSlice.reducer;
