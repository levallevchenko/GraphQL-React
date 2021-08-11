// Core
import { useLazyQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Queries
const queryPetById = loader('./gql/queryProfile.graphql');

export const useQueryProfile = () => {
  // В хуки query можно передавать pollInterval для перепроверки обновлений, skip может скипнуть запрос, если
  // необязательные данные не переданы
  // const [getProfile, { loading, error, data }] = useLazyQuery(queryPetById, { pollInterval: 500, skip: true },);
  const [getProfile, { loading, error, data }] = useLazyQuery(queryPetById);
  
  return { getProfile, loading, error, profile: data && data.petById };
}
