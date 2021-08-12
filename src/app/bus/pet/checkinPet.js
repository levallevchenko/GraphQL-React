// Core
import React from 'react';

// Hooks
import { useCheckin } from './hooks/useCheckin';

export const CheckinPet = () => {
  const { checkIn, pet, errors, error } = useCheckin();

  const petJSX = pet && (
    <>
      <p>Your pet is checkin:</p>
      <p>Id: { pet.id }</p>
      <p>Name: { pet.name }</p>
    </>
  );

  const errorsJSX = errors && (
    <p>
      We have a problem: {errors.message}
    </p>
  );

  const errorJSX = error && (
    <p>
      We have another problem: {error}
    </p>
  );

  return (
    <>
      <h2>Checkin</h2>
      <button onClick={() => checkIn('C-1')}>CheckIn</button>
      {petJSX}
      {errorsJSX}
      {errorJSX}
    </>
  )
};
