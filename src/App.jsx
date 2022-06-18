import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import List from "./components/List";
import { QueryClient, QueryClientProvider } from "react-query";
import Fetching from "./components/Fetching";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        Counter:
        <Counter />
        <hr />
        List
        <List />
        <hr />
        Fetching:
        <Fetching />
      </div>
    </QueryClientProvider>
  );
}

export default App;
