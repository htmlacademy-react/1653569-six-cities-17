export type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;
type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };
type Cast<X, Y> = X extends Y ? X : Y
type FromEntries<T> = T extends [infer Key, unknown][]
  ? { [K in Cast<Key, string>]: Extract<ArrayElement<T>, [K, unknown]>[1]}
  : { [key in string]: unknown }

export type FromEntriesWithReadOnly<T> = FromEntries<DeepWriteable<T>>

declare global {
   interface ObjectConstructor {
     fromEntries<T>(obj: T): FromEntriesWithReadOnly<T>;
  }

  interface ObjectConstructor {
    groupBy<K extends PropertyKey, T>(
      items: Iterable<T>,
      keySelector: (item: T, index: number) => K,
    ): Partial<Record<K, T[]>>;
  }

  interface MapConstructor {
    groupBy<K, T>(
      items: Iterable<T>,
      keySelector: (item: T, index: number) => K,
    ): Map<K, T[]>;
  }
}
