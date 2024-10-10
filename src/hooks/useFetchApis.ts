import { useState, useEffect } from 'react';

// Define an interface for the API info
interface ApiInfo {
  description: string;
  version: string;
  // Add any other fields you expect from the API response
}

interface ApiResponse {
  apis: Record<string, { info: ApiInfo }>; // Type for the expected structure of data.apis
}

interface ApiEntry {
  name: string;
  info: ApiInfo; // Keep this field to match the ApiEntry structure
}

const useFetchApis = (providerName: string) => {
  const [apis, setApis] = useState<ApiEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!providerName) {
      setLoading(false);
      return;
    }

    const fetchApis = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.apis.guru/v2/${providerName}.json`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: ApiResponse = await response.json(); // Assert the type here

        const apiList: ApiEntry[] = Object.entries(data.apis).map(([key, api]) => ({
          name: key,
          info: api.info, // Now TypeScript knows that api has an info property
        }));

        setApis(apiList);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchApis();
  }, [providerName]);

  return { apis, loading, error };
};

export default useFetchApis;
