// apps/gamemano-nextjs/hoc/ProtectedRoute.tsx
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect } from 'react';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  return <>{user ? children : null}</>;
};

export default ProtectedRoute;