import React from 'react';
import { useQueryAllCustomers } from './hooks/useQueryAllCustomers';

export const List = () => {
  const { loading, error, customers } = useQueryAllCustomers();

  const loaderJSX = loading && (
    <p>Идет загрузка...</p>
  );

  const errorJSX = error && (
    <p>
      We have a problem: {error.message}
    </p>
  );

  const customersJSX = customers && customers.map(({ username, name, dateCreated }) => (
    <p key={username}>
      <span>User name: {username}</span><br/>
      <span>Name: {name}</span><br/>
      <span>Created date: {dateCreated}</span>
    </p>
  ));

  return (
    <>
      <h2>Customers</h2>
      {loaderJSX}
      {errorJSX}
      {customersJSX}
    </>
  )
};
