import React from "react";
import { Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Navbar from "./components/Navbar";

function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
      <ReactQueryDevtools position="top-right" initialIsOpen={true}  />
    </QueryClientProvider>
  );
}

export default App;
