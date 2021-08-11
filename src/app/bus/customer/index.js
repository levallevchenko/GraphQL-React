import React from 'react';
// import { List } from './list'

import { useCustomer } from './hooks/useCustomer'

export const Customer = () => {
  const { handleChange, save, createdAccount } = useCustomer();

  const customerJSX = createdAccount && (
    <p>
      We already created customer with name: { createdAccount.name }
    </p>
  )
  return (
    <>
      <h1>Customer</h1>
      <h2>Sign Up</h2>
      <input type="text" placeholder="name" name="name" onChange={handleChange} />
      <input type="text" placeholder="username" name="username" onChange={handleChange} />
      <input type="password" placeholder="password" name="password" onChange={handleChange} />
      <button type="submit" onClick={save}>Save</button>
      {customerJSX}
      {/* <List /> */}
    </>
  )
}

