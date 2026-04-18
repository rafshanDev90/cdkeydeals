/**
 * Global Logger utility
 * Provides environment-aware logging capabilities
 */

const isDevelopment = process.env.NODE_ENV !== "production";

const logger = {
  info: (message, meta = {}) => {
    if (isDevelopment) {
      console.log(`[INFO] ${message}`, Object.keys(meta).length ? meta : "");
    }
  },
  
  warn: (message, meta = {}) => {
    if (isDevelopment) {
      console.warn(`[WARN] ${message}`, Object.keys(meta).length ? meta : "");
    }
  },
  
  error: (message, meta = {}) => {
    // In a real app, you might want to send this to Sentry, LogRocket, etc.
    console.error(`[ERROR] ${message}`, Object.keys(meta).length ? meta : "");
  },
};

export default logger;
