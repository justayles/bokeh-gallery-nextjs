import { createContext, ReactNode, useState } from 'react';

export interface IAuthContext {
  authenticated: boolean;
  role: 'ADMIN' | 'USER';
  setAdmin: () => void;
  setUser: () => void;
  login: () => void;
  logout: () => void;
}

export const defaultValue: IAuthContext = {
  authenticated: false,
  role: 'USER',
  setAdmin: () => undefined,
  setUser: () => undefined,
  login: () => undefined,
  logout: () => undefined,
};

const AuthContext = createContext<IAuthContext>(defaultValue);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [authenticated, setAuthenticated] = useState(
    defaultValue.authenticated
  );
  const [role, setRole] = useState(defaultValue.role);
  const login = () => setAuthenticated(true);
  const logout = () => setAuthenticated(false);
  const setAdmin = () => setRole('ADMIN');
  const setUser = () => setRole('USER');

  return (
    <AuthContext.Provider
      value={{ authenticated, role, setAdmin, setUser, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
