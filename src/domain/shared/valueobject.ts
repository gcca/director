export interface ValueObject<T> {
  sameValueAs(other: T): boolean;
  copy(): T;
}
