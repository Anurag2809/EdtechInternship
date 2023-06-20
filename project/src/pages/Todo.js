import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className='py-8 px-2'> 
      <label htmlFor="my-drawer-2" className="lg:hidden">
      <i class="bi bi-list"></i>
      </label>
      </div>
    <div className="drawer-content flex flex-col py-8 px-2">
    <div className="container-fluid mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      <div className="flex flex-col sm:flex-row mb-4">
        <input
          type="text"
          className="w-full rounded-lg sm:mr-2 border text-gray-800 border-gray-200 bg-white px-2 py-2 placeholder-gray-400 focus:outline-none"
          placeholder="Add a new todo..."
          value={newTodo}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 mt-2 sm:mt-0 rounded-lg"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex flex-col sm:flex-row items-center bg-white border-2 border-gray-200 p-2 rounded-md"
          >
            <span className="flex-grow">{todo}</span>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold px-2 mt-2 sm:mt-0 rounded-md"
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
      <ul className="menu p-4 w-40 h-full bg-base-200 text-base-content">
        {/* Sidebar content here */}
        <li><img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' alt=''></img></li>
        <li><a href='/#'>About</a></li>
        <li><a href='/#'>Courses</a></li>
        <li><a href='/#'>Assignments</a></li>
        <li><a href='/#'>Tests</a></li>
        <li><Link to='/todo'>TODO</Link></li>
      </ul>
    
    </div>
  </div>
    
  );
};
export default Todo;
