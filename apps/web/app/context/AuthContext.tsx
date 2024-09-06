import {createContext, useState, ReactNode, useContext} from 'react';

type AuthContextType = {
  user: string | null;
  // eslint-disable-next-line no-unused-vars
  login: (username: string, password: string) => void;
  logout: () => void;
  isUserExists: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<string | null>(null);

  const isUserExists = () => {
    if (user != '' || user != null) return true;
    else return false;
  };

  const login = (username: string, password: string) => {
    setUser(username);
    localStorage.setItem('user', JSON.stringify({username, password}));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{user, login, logout, isUserExists}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
