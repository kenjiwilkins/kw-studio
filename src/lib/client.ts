import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "http://localhost:4000/", // 各自の環境で書き換えてください
      fetchOptions: { cache: "no-store" }, // 一旦、キャッシュしない設定で逃げる
    }),
  });
});
