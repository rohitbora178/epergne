// src/types/ApiProvider.d.ts

export interface ApiProvider {
  name: string;            // Name of the API provider
  apis: ApiDetail[];      // List of APIs provided by this provider
}

export interface ApiDetail {
  name: string;           // Name of the API
  description?: string;   // Description of the API
  version?: string;       // Version of the API
  title?: string;         // Title of the API
  contact?: ApiContact;   // Contact information for the API
  logoUrl?: string;       // URL for the API logo
}

export interface ApiContact {
  name?: string;          // Name of the contact person
  email?: string;         // Email address of the contact person
  url?: string;           // Website URL for the contact
}
