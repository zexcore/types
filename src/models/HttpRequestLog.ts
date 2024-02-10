/**
 * Represents an HTTP request stored by the express-logger.
 */

export type HttpRequestLog = {
  id: string;
  method: string;
  path: string;
  status: number;
  ip: string;
  project: string;
  timestamp: number;
  /**
   * Time it took to handle this request, in milliseconds.
   */
  execution_time: number;
};
