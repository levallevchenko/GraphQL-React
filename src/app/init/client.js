// Более продвинутый пакет, позволяет работать с кэшом
import { ApolloClient } from "apollo-client";

// {Эти хелперы нужны, что была возможность построить конфиг-файл, который поддерживает работы как по HTTP, так и по WebSocket }
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

// ApolloClient требует link, поэтому нужен createHttpLink, позволяет работать с HTTP-запросами 
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache} from 'apollo-cache-inmemory';
// Нужен для того, чтобы сконфигурировать правильную ссылку, которая будет содержать авторизационные данные
import { setContext } from 'apollo-link-context';

const root = 'funded-pet-library.moonhighway.com/';

// GraphQL Server
const uri = `https://${root}`;
const httpLink = createHttpLink({uri});

// WS — нужен для того, чтобы работать с WebSocket
// В WebSocketLink ужно передать объект с конфигурацией
const wsLink = new WebSocketLink({
  uri: `wss://${root}graphql`,
  options: {
    // При проблеме с соединением автоматически переподключится
    reconnect: true
  }
});


// Auth — отвечает за то, чтобы забрать токен из localStorage и подложить к хедерам
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

const wrappedHttpLink = authLink.concat(httpLink);

// Функция выбирает либо http либо ws
const link = split(
  ({ query }) => {
    // нужно понять, какого рода операцию хотим выполнить (по типу запроса)
    const definition = getMainDefinition(query);
    return (
      // тип операции доступен
      definition.kind === 'OperationDefinition' &&
      // тип операции — подписка
      definition.operation === 'subscription'
    )
  },
  wsLink,
  wrappedHttpLink
);


// Cache initialization
const cache = new InMemoryCache();

export const client = new ApolloClient({
  cache,
  // httpLink прикрепляем к authLink
  link
});
