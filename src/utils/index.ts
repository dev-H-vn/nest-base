export * from './auth';
export * from './apiResponses/response-interceptor';
export * from './guard';

export const capitalizeFirstLetter = (s: string): string => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};
