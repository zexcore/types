import { Role } from "./Role";

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
};
