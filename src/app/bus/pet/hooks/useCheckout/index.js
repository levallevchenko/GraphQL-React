// Core
import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Mutations
const mutationCheckOut = loader('./gql/mutationCheckout.graphql');

export const useCheckOut = () => {
  const [_checkOut, { data, errors }] = useMutation(mutationCheckOut);
  const [error, setError] = useState(false);

  const checkOut = (id) => {
    if (error) {
      setError(false);
    }
    (async () => {
      try {
        await _checkOut({
          variables: {
            id
          }
        })
      } catch (error) {
        setError(error.message);
      }
    })()
  };

  const pet = data && data.checkOut.pet;

  return {
    checkOut,
    pet,
    errors,
    error
  }
};
