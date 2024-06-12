import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { router } from "./router";
import "./index.css";

const client = new ApolloClient({
  uri: import.meta.env.VITE_SERVER_URL,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
    <Toaster position="bottom-left" reverseOrder={false} />
  </ApolloProvider>,
);
