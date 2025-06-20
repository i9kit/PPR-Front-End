'use client'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'
import { store } from '@/store/store';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

export default function Providers({children}: PropsWithChildren) {
  return (
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
           {children} 
    </Provider>
  </QueryClientProvider> 
  )
}
