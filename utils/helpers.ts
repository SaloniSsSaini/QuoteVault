/**
 * Capitalize first letter of a string
 */
export const capitalize = (text: string) => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
};

/**
 * Truncate long text with ellipsis
 */
export const truncate = (text: string, length = 100) => {
  if (!text) return '';
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
};

/**
 * Simple delay (useful for loaders / demos)
 */
export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Check if array is empty or null
 */
export const isEmptyArray = (arr?: any[]) => {
  return !arr || arr.length === 0;
};
