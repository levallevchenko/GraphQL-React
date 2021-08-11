// Core
import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

// Components

// import { Customer } from './bus/customer';
import { Login } from './bus/customer/login';
import { Pet } from './bus/pet';

// Other
import { client } from './init/client';

export const App = () => {
  return (
    <ApolloProvider client={client}>
      {/* <Customer /> */}
      <Login />
      <Pet />
    </ApolloProvider>
  )
};
