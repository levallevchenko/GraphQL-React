import React from 'react';

// Hooks
import { useQueryAllAvailablePets } from './hooks/useQueryAllAvailablePets';

export const SpecialList = () => {
  const { getAllAvailablePets, loading, error, pets } = useQueryAllAvailablePets();

  // Более лаконичный способ без if
  const loaderJSX = loading && (
    <p>Loading...</p>
  );

  const errorJSX =  error && (
    <p>
      We have a problem: {error.message}
    </p>
  )


// При первом рендере pet undefined. pet появляется только при клике на DownLoad. Проверяем
  const petsJSX = pets && pets.map(({ id, name, weight }) => (
    <p key={id}>
      <span>Name: {name}</span><br/>
      <span>Weight: {weight}</span>
    </p>
  ));

  return (
    <>
      <button onClick={getAllAvailablePets}>Download</button>
      {loaderJSX}
      {errorJSX}  
      {petsJSX}
    </>
  )
};
