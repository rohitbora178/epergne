// src/api/api.ts

const BASE_URL = 'https://api.apis.guru/v2';

export const fetchProviders = async (): Promise<any> => {
  const response = await fetch(`${BASE_URL}/providers.json`);
  if (!response.ok) {
    throw new Error('Failed to fetch providers');
  }
  return response.json();
};

export const fetchApisByProvider = async (providerName: string): Promise<any> => {
  const response = await fetch(`${BASE_URL}/${providerName}.json`);
  if (!response.ok) {
    throw new Error(`Failed to fetch APIs for provider: ${providerName}`);
  }
  return response.json();
};
