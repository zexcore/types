/**
 * Represents an API Key used to access the services via RTM API
 */

export type APIKey = {
  created: number;
  name: string;
  owner: string;
  secret: string;
};
