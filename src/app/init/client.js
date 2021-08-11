// Более продвинутый пакет, позволяет работать с кэшом
import { ApolloClient } from "apollo-client";
// ApolloClient требует link, поэтому нужен createHttpLink, позволяет работать с HTTP-запросами 
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache} from 'apollo-cache-inmemory';
// Нужен для того, чтобы сконфигурировать правильную ссылку, которая будет содержать авторизационные данные
import { setContext } from 'apollo-link-context';

// GraphQL Server
const uri = 'https://funded-pet-library.moonhighway.com/'
const httpLink = createHttpLink({uri});

// Auth
// Первый параметр пропускаем, второй забирает хедеры
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      // Старые хедеры
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
});

// Cache initialization
const cache = new InMemoryCache();

export const client = new ApolloClient({
  cache,
  // httpLink прикрепляем к authLink
  link: authLink.concat(httpLink),
});
