import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Episode01 from "./components/Episode01";
import InfiniteScrollExample from "./components/InfiniteScrollExample";

function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      {/* <Episode01 /> */}
      <InfiniteScrollExample />
      <ReactQueryDevtools />
      {/* <ReactQueryDevtools position="top-right" initialIsOpen={true} /> */}
    </QueryClientProvider>
  );
}

export default App;
