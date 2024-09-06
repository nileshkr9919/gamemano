'use client';

import {useState} from 'react';
import {useAuth} from '../context/AuthContext';
import {Button} from '@repo/ui/components/ui/button';

export default function LoginPage() {
  const {login} = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    login(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="border p-2 w-full mb-2"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border p-2 w-full mb-2"
      />
      <Button type="submit" className="w-full">
        Login
      </Button>
    </form>
  );
}
