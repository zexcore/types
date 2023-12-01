/**
 * Represents an activity on the platform, such as a user signup, a webhook notification of transaction (tx), subscription updates, etc.
 */
export type PlatformActivity = {
  /**
   * When the activity was created.
   */
  created: number;

  /**
   * Type of the activity
   */
  type: string;

  /**
   * The system message regarding the activity.
   */
  message: string;

  /**
   * If specified, contains the user that resulted this activity. I.e. an admin, or a normal user. Only contains id, name, email, and image.
   */
  user?: {
    uid: string;
    name: string;
    email: string;
    image?: string;
  };
};
