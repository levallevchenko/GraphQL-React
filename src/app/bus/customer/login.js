import React from 'react';

// Hooks
import { useCustomerAuth } from './hooks/useCustomerAuth';

export const Login = () => {
  const { handleChange, logIn, authorizedCustomer } = useCustomerAuth();

  const authorizedCustomerJSX = authorizedCustomer && (
    <>
      <p>Hi, { authorizedCustomer.customer.name }! You are logged in now. Welcome!</p>
    </>
  );

  return (
    <>
      <h1>Please login</h1>
      <input type="text" placeholder="username" name="username" onChange={handleChange} />
      <input type="password" placeholder="password" name="password" onChange={handleChange} />
      <button type="submit" onClick={logIn}>Login</button>
      {authorizedCustomerJSX}
    </>
  )
};
