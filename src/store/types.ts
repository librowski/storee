export interface Resource<T> {
  data: T[];
  isPendingFetch: boolean;
  isPendingUpdate: boolean;
  error?: Error;
}
