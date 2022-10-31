import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/globals";
import { RecoilRoot } from "recoil";
import { ApolloProvider } from "@apollo/client";
import graphqlClient from "../gql/graphql-client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={graphqlClient}>
      <RecoilRoot>
        {GlobalStyle}
        <Component {...pageProps} />
      </RecoilRoot>
    </ApolloProvider>
  );
}

export default MyApp;
