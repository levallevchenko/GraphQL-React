import React from 'react';

// Components

// import { Counter } from './counter';
// import { List } from './list';
// import { SpecialList } from './specialList';
// import { Profile } from './profile';
import { CheckinPet } from './checkinPet';
import { CheckoutPet } from './checkoutPet';



export const Pet = () => {
  return (
    <>
      <h1>Your Pet</h1>
      {/* <Profile />
      <Counter />
      <List />
      <SpecialList /> */}
      <CheckinPet />
      <CheckoutPet />
    </>
  )
};
