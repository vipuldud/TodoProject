import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Todo List</h1>
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <AddTodo />
          <TodoList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
