/**
 * Represents a notification in the database for each user on PFM.
 */
export type Notification = {
  content: string;
  contentType: "ticket" | "message" | "subscription" | "payment" | string;
  timestamp: number;
  /**
   * For tickets and messages, this is a ticket id. For subscription, its a subscription id.
   */
  contentId: string;
  uid: string;
  read: boolean;
};
