// Core
import React from 'react';

// Hooks
import { usePetReturned } from './hooks/usePetReturned';

export const PetReturned = () => {
  const { loading, errors, pet } = usePetReturned();

  const loaderJSX = loading && (
    <p>User check in progress...</p>
  );

  const errorsJSX = errors && (
    <p>
      We have a problem: {errors.message}
    </p>
  );

  const petJSX = pet && (
    <>
      <p>Id: { pet.id }</p>
      <p>Name: { pet.name }</p>
    </>
  );

  return (
    <>
      <h2>Pet Returned</h2>
      {loaderJSX}
      {errorsJSX}
      {petJSX}
    </>
  )
};
