import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const signIn = () => {
    // Perform your sign-in logic (e.g., API call, setting auth token)
    setAuthenticated(true);
  };

  const signOut = () => {
    // Perform your sign-out logic (e.g., clear auth token)
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
