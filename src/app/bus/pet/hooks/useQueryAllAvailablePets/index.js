// Core
import { useLazyQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Queries
const queryAllAvailablePets = loader('./gql/queryAllAvailablePets.graphql');

// Внутри кастомного хука нужно забрать и вернуть данные
export const useQueryAllAvailablePets = () => {
  // useLasyQuery возвращает массив, первый аргумент — функция, второй такой же объект как в useQuery
  // useLasyQuery даёт возможность вызвать хук по событию
  const [getAllAvailablePets, { loading, error, data }] = useLazyQuery(queryAllAvailablePets);
  
  // Более лаконичный способ деструктурировать объект
  return { getAllAvailablePets, loading, error, pets: data && data.allAvailablePets };
}
