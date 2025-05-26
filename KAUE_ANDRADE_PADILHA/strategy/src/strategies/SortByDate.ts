import type { SortStrategy } from "./SortStrategy";

export class SortByDate<T extends { date: Date }> implements SortStrategy<T> {
  sort(data: T[]): T[] {
    return [...data].sort((a, b) => b.date.getTime() - a.date.getTime());
  }
}