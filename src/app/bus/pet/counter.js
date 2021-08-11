import React from 'react';

// Hooks
import { useQueryAvailablePets } from './hooks/useQueryAvailablePets';

export const Counter = () => {
  // |При первом рендере underfined, потом запускается useQuery
  // networkStatus содержит статус-коды состояний запросов в том числе error, load
  // const { loading, error, availablePets, networkStatus = 4 } = useQueryAvailablePets();
  const { loading, error, availablePets } = useQueryAvailablePets();

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return (
      <p>
        We have a problem: {error.message}
      </p>
    )
  }

  return (
    <p>AvailablePets: {availablePets}</p>
  )
};
