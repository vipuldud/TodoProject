import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, removeAllTodos } from './todoSlice';

function AddTodo() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (todo.trim()) {
      dispatch(addTodo(todo));
      setTodo('');
    }
  };

  return (
    <div className="mb-6">
      <div className="flex space-x-2">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add a new task"
          className="flex-1 border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>
      <button
        onClick={() => dispatch(removeAllTodos())}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg w-full hover:bg-red-600 transition"
      >
        Remove All
      </button>
    </div>
  );
}

export default AddTodo;
