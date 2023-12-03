import { LogMessageKind } from "./LogMessageKind";

/**
 * Represents the dashboard layout of a user.
 */

export type DashboardWidget =
  | {
      type: undefined;
    }
  | {
      type: "stat";
      name: string;
    }
  | {
      type: "logs";
      source:
        | {
            type: "function_calls" | "http_requests" | "log_messages";
          }
        | {
            type: "function_calls";
            // Options relevant to function calls
            name?: string;
            tags?: string[];
          }
        | {
            type: "http_requests";
            // Options relevant to function calls
            method?: string;
            tags?: string[];
            path?: string;
            status?: number;
          }
        | {
            type: "log_messages";
            // Options relevant to logs
            tags?: string[];
            kind?: LogMessageKind;
          };
    }
  | {
      type: "counter";
      source:
        | {
            type: "function_calls" | "http_requests" | "log_messages" | "users";
          }
        | {
            type: "function_calls";
            // Options relevant to function calls
            name?: string;
            tags?: string[];
          }
        | {
            type: "http_requests";
            // Options relevant to function calls
            method?: string;
            tags?: string[];
            path?: string;
            status?: number;
          }
        | {
            type: "log_messages";
            // Options relevant to logs
            tags?: string[];
            kind?: LogMessageKind;
          }
        | {
            type: "users";
          };
    }
  | {
      type: "logs" | "counter" | "stat";
    };
