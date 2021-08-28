/**
 * Returns a boolean indicating if the current code is running server side or not.
 */
export const isRunningServerSide: () => boolean = () => {
  return typeof window === 'undefined';
};

/**
 * Returns a boolean indicating if the current node process is running in development mode.
 */
export const isDevEnv: () => boolean = () => {
  return process.env.NODE_ENV === 'development';
};
