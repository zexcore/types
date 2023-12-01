import { Role } from "./Role";
import { PaymentMethod } from "./Stripe/PaymentMethod";
import { StripeSubscription } from "./Stripe/StripeSubscription";

/**
 * Represents a user on the PFM Platform. A user can either be a customer or an administrator. Customers have 'customer_info' information attached, and a few aditional properties such as subscriptions.
 */
export type User = {
  /**
   * Firebase User ID of the customer.
   */
  uid: string;

  name: string;

  email: string;

  image?: string;

  /**
   * Role of the user account.
   */
  role: Role;

  emailVerified: boolean;

  /**
   * Date at which user signed up. This is a unix-timestamp.
   */
  registeredTimestamp: number;

  /**
   * Time at which this user last signed in. This is a unix timestamp.
   */
  lastSigninTimestamp: number;

  /**
   * Contains the customer information about the user, if they have a customer role.
   */
  customer_info: {
    /**
     * Stripe Customer ID.
     */
    customer_id: string;

    /**
     * True if the customer has been deleted on stripe.
     */
    deleted?: boolean;

    /**
     * Address information of the customer, retrieved from Stripe.
     */
    address: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
    };
    description?: string;
    email: string;
    metadata: any;
    /**
     * Name of the customer on Stripe. This is also the billing name.
     */
    name: string;
    /**
     * Time at which the customer was created. This is a unix timestamp.
     */
    created: number;
    currency: string;
    /**
         * When the customer’s latest invoice is billed by charging automatically, delinquent is true if the invoice’s latest charge failed. When the customer’s latest invoice is billed by sending an invoice, delinquent is true if the invoice isn’t paid by its due date.
If an invoice is marked uncollectible by dunning, delinquent doesn’t get reset to false.
         */
    delinquent: boolean;

    payment_methods: PaymentMethod[];

    // Extra params from stripe.
    [key: string]: any;
  };

  /**
   * Active subscriptions of the user.
   */
  subscriptions: StripeSubscription[];

  /**
   * UID of the user who created this account. Null for signed up users.
   */
  addedByUid?: string;

  /**
   * Name of the user who created this user.
   */
  addedByName?: string;

  /**
   * Last time this user was updated. This is a unix time stamp.
   */
  updatedTimestamp: number;

  /**
   * True if the user is disabled for signing in.
   */
  disabled?: boolean;

  /**
   * True if the user account is suspended.
   */
  suspended?: boolean;

  /**
   * Reason of the suspension of account.
   */
  suspensionReason?: string;

  /**
   * Unix-timestamp of when the user was suspended.
   */
  suspendedTimestamp?: number;

  /**
   * Any comments added by admins.
   */
  comments?: string;

  /**
   * Base-64 encoded signature of the user.
   */
  signature?: string;
};
