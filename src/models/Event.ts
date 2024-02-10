/**
 * Represents an event emitted by the library using logEvent method.
 */
export type Event = {
  id: string;
  /**
   * Name of the event.
   */
  name: string;
  /**
   * The associated project id.
   */
  project: string;

  /**
   * Time at which this event was created.
   */
  timestamp: number;

  /**
   * The location of the client.
   */
  location?: {
    lat: string;
    long: string;
    name?: string;
  };

  /**
   * Any mixed data associated with the event.
   */
  data?: any[];

  /**
   * An identifier can be anything that identifies the user or calling API's Context.
   */
  identifier?: string;

  /**
   * Description of the event. Not important.
   */
  description?: string;
};
