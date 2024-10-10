
  // src/types/ApiDetails.d.ts

export interface ApiDetails {
  name: string;                // The unique identifier for the API
  description?: string;        // A brief description of the API
  version: string;             // The version of the API
  title: string;               // The title of the API
  contact?: ApiContact;        // Contact information for the API
  endpoints: ApiEndpoint[];    // List of endpoints for the API
  logoUrl?: string;            // URL for the API logo
}

export interface ApiContact {
  name?: string;               // Name of the contact person
  email?: string;              // Email address of the contact person
  url?: string;                // Website URL for the contact
}

export interface ApiEndpoint {
  path: string;                // The path of the API endpoint
  method: string;              // The HTTP method (GET, POST, etc.)
  description?: string;        // A brief description of the endpoint
  parameters?: ApiParameter[]; // List of parameters accepted by the endpoint
  responses: ApiResponse[];    // List of possible responses from the endpoint
}

export interface ApiParameter {
  name: string;                // Name of the parameter
  required: boolean;           // Whether the parameter is required
  type: string;                // Type of the parameter (e.g., string, number)
  description?: string;        // A brief description of the parameter
}

export interface ApiResponse {
  status: number;              // HTTP status code of the response
  description?: string;        // A brief description of the response
  schema?: object;             // Optional schema describing the response body
}
