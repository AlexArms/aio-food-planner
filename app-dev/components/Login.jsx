import React from 'react';
import { LoginContainer } from '../styled-components.js';

const Login = () => {

  return (
    <LoginContainer>
      <label htmlFor="username">Username:</label>
      <input type="text" name="username"/>
      <label htmlFor="password">Password:</label>
      <input type="text" name="password"/>
    </LoginContainer>
  );

}

export default Login;
