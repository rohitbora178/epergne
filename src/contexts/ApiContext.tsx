// src/contexts/ApiContext.tsx

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ApiProvider } from '../types/ApiProvider'; // Import the appropriate types

interface ApiContextType {
  providers: ApiProvider[];
  selectedProvider: string | null;
  setSelectedProvider: (provider: string) => void;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const ApiProviderContext: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [providers, setProviders] = useState<ApiProvider[]>([]);
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const response = await fetch('https://api.apis.guru/v2/providers.json');
        const data = await response.json();
        const providerList = Object.keys(data).map((key) => ({
          name: key,
          apis: data[key].apis || [],
        }));
        setProviders(providerList);
      } catch (error) {
        console.error('Error fetching providers:', error);
      }
    };

    fetchProviders();
  }, []);

  return (
    <ApiContext.Provider value={{ providers, selectedProvider, setSelectedProvider }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = (): ApiContextType => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApiContext must be used within an ApiProviderContext');
  }
  return context;
};
