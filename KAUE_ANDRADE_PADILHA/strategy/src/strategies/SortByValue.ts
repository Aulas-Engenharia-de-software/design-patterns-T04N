import type { SortStrategy } from "./SortStrategy";

export class SortByValue<T extends { value: number }> implements SortStrategy<T> {
  sort(data: T[]): T[] {
    return [...data].sort((a, b) => b.value - a.value);
  }
}
