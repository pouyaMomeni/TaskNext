'use client';
import { queryClientOptions } from '@/app/_utils/constants'; 
import { QueryClient, QueryClientProvider } from 'react-query'
import React, { ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
}

export const Providers = ({ children }: Props) => {
  const [queryClient] = useState(() => new QueryClient(queryClientOptions));

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};