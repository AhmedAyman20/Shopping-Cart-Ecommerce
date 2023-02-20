import { createRoot } from "react-dom/client";
import MainPage from "./MainPage/MainPage";
import NavBar from "./NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./CartPage/CartPage";
import ProductContext from "./ProductContext";
import { useState } from "react";
import { PRODUCTS } from "./Data/products";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  let arr = [0];
  PRODUCTS.map(() => arr.push(0));
  const product = useState(arr);
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <ProductContext.Provider value={product}>
            <NavBar />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/cartPage" element={<CartPage />} />
            </Routes>
          </ProductContext.Provider>
        </QueryClientProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

export default App;
