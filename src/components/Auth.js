import React, { useContext } from 'react';
import {AuthContext} from './App';

const Auth = () => {
    const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext)
  return (
    <div>
        <h1>Click on the checkbox to get authenticated</h1>

        {isAuthenticated ? (
            <p>You are authenticated</p>
        ) : (
            <p>You are not authenticated</p>
        )}

        <input 
        checked={isAuthenticated}
        onChange={(e) => {
            setIsAuthenticated(e.target.checked)
        }}
        type='checkbox'/>

        <label>I'm not a robot</label>

    </div>
  )
}

export default Auth