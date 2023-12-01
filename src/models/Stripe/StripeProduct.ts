/**
 * Defines the Stripe product.
 */

export type StripeProduct = {
  id: string;
  name: string;
  description?: string;
  images?: string[];
  metadata?: any;
  created: number;
  updated: number;
  [key: string]: any;
};
