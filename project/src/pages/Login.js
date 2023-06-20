import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate= useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();

    if (loginType === 'student') {
      // Perform student login
      try {
        // Your student login logic
        const response = await fetch('http://localhost:5000/studentlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.status === 200) {
        console.log(data.message); // Login successful
        navigate('/studentlanding');
        // Perform the desired action after successful login, e.g., redirect to a different page
      } else {
        setErrorMessage(data.message);
      }
      } catch (error) {
        console.error('Login error:', error);
      setErrorMessage('Failed to login');
      }
    } else if (loginType === 'instructor') {
      // Perform instructor login
      try {
        // Your instructor login logic
        const response = await fetch('http://localhost:3001/instructorlogin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        const data = await response.json();
  
        if (response.status === 200) {
          console.log(data.message); // Login successful
          navigate('/instructorlanding');
          // Perform the desired action after successful login, e.g., redirect to a different page
        } else {
          setErrorMessage(data.message);
        }
      } catch (error) {
        console.error('Login error:', error);
        setErrorMessage('Failed to login');
      }
    } else {
      setErrorMessage('Invalid login type');
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-md rounded-md px-8 py-6" onSubmit={handleLogin}>
          <h2 className="text-2xl font-bold mb-4 text-neutral text-center">Login</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-neutral font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your username"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-neutral font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your password"
              value={password}
        onChange={e => setPassword(e.target.value)}
            />
          </div>
          <label className='px-2'>
          Student:
          <input
            type="radio"
            name="loginType"
            value="student"
            checked={loginType === 'student'}
            onChange={(e) => setLoginType(e.target.value)}
          />
        </label>
        <label className='px-2'>
          Instructor:
          <input
            type="radio"
            name="loginType"
            value="instructor"
            checked={loginType === 'instructor'}
            onChange={(e) => setLoginType(e.target.value)}
          />
        </label>
          <div className='py-2'>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Login
            </button>
          </div>
          <div className='text-center py-3'>
            <Link to='/userselect'>No account? Register here</Link>
          </div>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
  );
 
};

export default Login;
