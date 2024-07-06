"use client";

import { useState, useEffect } from 'react';
import { useStore } from '../store/useStore';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const { users, fetchUsers } = useStore();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  console.log(users);
  
  const handleLogin = () => {
    const user = users.find(u => u.login.username === username && u.login.password === password);
    
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      router.push('/profile');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full max-w-md p-8 space-y-3 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <div className="space-y-2">
          <input
            type="text"
            className="w-full px-4 py-2 border rounded text-black"
            placeholder="Username"
            
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="w-full px-4 py-2 border rounded text-black"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
