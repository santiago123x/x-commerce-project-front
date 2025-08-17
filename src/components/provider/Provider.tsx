"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { store, AppStore } from "@/lib/store";
import { useHydrateCartFromStorage } from "@/hooks/useHydrateCartFromStorage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const makeQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        refetchOnWindowFocus: false,
      },
    },
  });


let browserQueryClient: QueryClient | undefined;

const getQueryClient = () => {
  if (typeof window === "undefined") {
    return makeQueryClient();
  }

  if (!browserQueryClient) browserQueryClient = makeQueryClient();
  return browserQueryClient;
};

export function Providers({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = store;
  }

  useHydrateCartFromStorage(storeRef.current);

  const queryClient = getQueryClient();

  return (
    <Provider store={storeRef.current!}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
}
