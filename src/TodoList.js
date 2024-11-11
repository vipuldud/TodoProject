import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from './todoSlice';

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Your Todos:</h2>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-gray-200 p-3 rounded-lg"
          >
            <span className="text-gray-800">{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-red-500 hover:text-red-700 transition"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      {todos.length === 0 && <p className="text-gray-500 mt-4">No todos available</p>}
    </div>
  );
}

export default TodoList;
