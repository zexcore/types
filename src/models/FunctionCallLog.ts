/**
 * Represents a function log. Can be used optionally to log function calls.
 */

export type FunctionCallLog = {
  /**
   * Unique snowflake id.
   */
  id: string;
  name: string;
  project: string;
  timestamp: number;
  parameters?: any[];
};
