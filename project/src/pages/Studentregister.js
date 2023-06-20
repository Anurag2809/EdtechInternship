import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Studentregister= () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/studentregister', { name, email, password });
      alert('User registered successfully');
    } catch (err) {
      console.error(err);
      alert('Registration failed');
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-md rounded-md px-8 py-6" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4 text-neutral text-center">Register</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-neutral font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your email"
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-neutral font-semibold">
              Username
            </label>
            <input
              type="text"
              id="name"
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your email"
              value={name} onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-neutral font-semibold">
             Set Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your password"
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
             <Link to='/login'> Signup</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Studentregister;
