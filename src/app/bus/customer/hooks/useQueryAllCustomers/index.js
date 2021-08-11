// Core
import { useQuery } from "@apollo/react-hooks";
import { loader} from 'graphql.macro';

// Queries
const queryAllCustomers = loader('./gql/queryAllCustomers.graphql');

export const useQueryAllCustomers = () => {
  const { loading, error, data} = useQuery(queryAllCustomers);

  return { loading, error, customers: data && data.allCustomers };
}
