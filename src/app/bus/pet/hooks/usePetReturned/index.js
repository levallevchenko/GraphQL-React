// Core
// import { useState } from 'react';
import { useSubscription } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Subscriptions
const subscriptionPetReturned = loader('./gql/subscriptionPetReturned.graphql');

export const usePetReturned  = () => {
  const { loading, error, data } = useSubscription(subscriptionPetReturned);

  const pet = data && data.petReturned.pet;

  return { loading, error, pet }
};
