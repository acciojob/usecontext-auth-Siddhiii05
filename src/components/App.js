import React, { createContext, useState } from "react";
import "./../styles/App.css";
import Auth from "./Auth";

export const AuthContext = createContext();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <AuthContext.Provider
        value={{ isAuthenticated, setIsAuthenticated }}
      >
        <Auth />
      </AuthContext.Provider>
    </div>
  );
};

export default App;