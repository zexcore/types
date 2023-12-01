// Represents a subscription on the PFM platform.
// These subscriptions only define what products are given to users, along with their periods.

import { StripeProduct } from "./Stripe/StripeProduct";
import { StripeSubscription } from "./Stripe/StripeSubscription";

/**
 * Represents a user's subscription.
 */
export type Subscription = {
  /**
   * Unique subscription id.
   */
  id: string;

  name: string;

  /**
   * Products assigned to this subscription.
   */
  products: StripeProduct[];

  /**
   * The price of the subscription.
   */
  price: {
    /**
     * Amount in cents.
     */
    amount: number;

    /**
     * Currency in three-letter ISO format.
     */
    currency: string;
  };
  kind: "recurring" | "onetime";
  /**
   * For recurring subscriptions, specifies how often to charge the user.
   */
  schedule?: "daily" | "weekly" | "monthly" | "3-month" | "6-month" | "yearly";
  /**
   * Extra metadata of the product.
   */
  metadata?: { key: string; value: string }[];

  /**
   * Trial period, in number of days. Set to 0 to disable trial (or leave empty)
   */
  trial?: number;

  /**
   * Unix timestamp of when the subscription was created.
   */
  createdTimestamp: number;

  /**
   * UID of the admin who created the subscription.
   */
  createdByUid: string;

  /**
   * Name of the admin who created it.
   */
  createdByName: string;

  /**
   * Unix timestamp of when the subscription was modified.
   */
  modifiedTimestamp: number;

  /**
   * UID of the admin who modified the subscription.
   */
  modifiedByUid: string;

  /**
   * Name of the admin who modified it.
   */
  modifiedByName: string;

  data?: StripeSubscription;
};
