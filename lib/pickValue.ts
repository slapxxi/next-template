export function pickValue<T, U>(value: T, ...expected: [T, U][]): U | undefined {
  for (const exp of expected) {
    if (value === exp[0]) {
      return exp[1];
    }
  }
}
