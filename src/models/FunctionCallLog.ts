/**
 * Represents a function log. Can be used optionally to log function calls.
 */

export type FunctionCallLog = {
  name: string;
  parameters?: any;
  timestamp: number;
  project: string;
  tags?: string[];
  execution_time?: number;
};
