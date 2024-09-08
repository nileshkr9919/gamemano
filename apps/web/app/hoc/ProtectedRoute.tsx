'use client';

import {useAuth} from '../context/AuthContext';
import {useRouter} from 'next/navigation';
import React, {useEffect} from 'react';

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {
  const {user} = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  return <>{user ? children : null}</>;
};

export default ProtectedRoute;
