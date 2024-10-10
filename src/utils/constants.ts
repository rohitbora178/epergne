// src/constants/constants.ts

export const API_BASE_URL = 'https://api.apis.guru/v2';

export const DEFAULT_PAGE_TITLE = 'API Explorer';

export const ERROR_MESSAGES = {
  FETCH_PROVIDERS: 'Failed to fetch providers. Please try again later.',
  FETCH_APIS: (providerName: string) => `Failed to fetch APIs for provider: ${providerName}. Please try again later.`,
  API_NOT_FOUND: 'API not found. Please check the selected API.',
};

export const APP_COLORS = {
  primary: '#007bff',
  secondary: '#6c757d',
  background: '#f8f9fa',
  text: '#212529',
  border: '#dee2e6',
};

// You can add more constants as needed
