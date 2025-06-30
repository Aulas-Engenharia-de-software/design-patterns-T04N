export interface SortStrategy<T> {
  sort(data: T[]): T[];
}