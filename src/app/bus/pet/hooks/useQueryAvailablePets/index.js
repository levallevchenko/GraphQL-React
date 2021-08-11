// Core
import { useQuery } from "@apollo/react-hooks";
import { loader } from 'graphql.macro';

// Queries
const queryAvailablePets = loader('./gql/queryAvailablePets.graphql');

// Внутри кастомного хука нужно забрать и вернуть данные
export const useQueryAvailablePets = () => {
  const { loading, error, data } = useQuery(queryAvailablePets);

  const availablePets = data ? data.availablePets : null;
  
  return { loading, error, availablePets };
}