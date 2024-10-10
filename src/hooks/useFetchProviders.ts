// src/hooks/useFetchProviders.ts

import { useState, useEffect } from 'react';
import { ApiProvider } from '../types/ApiProvider'; // Adjust the import based on your types

const useFetchProviders = () => {
  const [providers, setProviders] = useState<ApiProvider[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const response = await fetch('https://api.apis.guru/v2/providers.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const providerList = Object.keys(data).map((key) => ({
          name: key,
          apis: data[key].apis || [],
        }));
        setProviders(providerList);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProviders();
  }, []);

  return { providers, loading, error };
};

export default useFetchProviders;
