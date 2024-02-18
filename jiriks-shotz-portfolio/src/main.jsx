import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextAPI from "./components/context.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 5 * 60,
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <ContextAPI>
        <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
    </ContextAPI>
);
