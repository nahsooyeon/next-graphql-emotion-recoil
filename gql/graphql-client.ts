import { ApolloClient, InMemoryCache } from "@apollo/client";

/* apollo-client 객체는  graphql server(uri) 를 상대로 데이터를 주고받는 역할을 합니다. */

/* axios 같은 ajax 라이브러리  */

/* InMemoryCache는 graphql client가 한 번 받아온 정보들을 필요 이상으로 다시 요청할 필요가 없도록  cache를 관리해주는 역할을 한다. */

const graphqlClient = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

export default graphqlClient;
