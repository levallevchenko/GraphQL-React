// Core
import React from 'react';

// Hooks
import { useCheckOut } from './hooks/useCheckout';

export const CheckoutPet = () => {
  const { checkOut, pet, errors, error } = useCheckOut();

  const petJSX = pet && (
    <>
    <p>Your pet is checkout:</p>
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
      <h2>Checkout</h2>
      <button onClick={() => checkOut('C-1')}>CheckOut</button>
      {petJSX}
      {errorsJSX}
      {errorJSX}
    </>
  )
};
