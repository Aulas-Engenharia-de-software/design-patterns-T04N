import type { SortStrategy } from "./SortStrategy";

export class SortByName<T extends { name: string }> implements SortStrategy<T> {
  sort(data: T[]): T[] {
    return [...data].sort((a, b) => a.name.localeCompare(b.name));
  }
}
