export * from './menu';
export * from './shared';

// You can also export combined types here
export type ApiMenuResponse = ApiResponse<MenuItem[]>;
export type ApiCategoryResponse = ApiResponse<Category[]>;

// Utility types
export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = {
  [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
}[Keys];