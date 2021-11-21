export function* range(n: number): Generator<number, void, unknown> {
  for (let i = 0; i < n; ++i) {
    yield i
  }
}
