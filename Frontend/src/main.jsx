import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import { ShopContextProvider } from "./context/ShopContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </QueryClientProvider>
  </BrowserRouter>,
);
