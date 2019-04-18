// euclid
const gcd = (a: number, b: number): number => {
  while (true) {
    if (a < b) {
      if (b % a == 0) {
        return a;
      } else {
        b %= a;
      }
    } else {
      if (a % b == 0) {
        return b;
      } else {
        a %= b;
      }
    }
  }
}

const coprime1 = (a: number, b: number): boolean => {
  return gcd(a, b) == 1
}

export const array_of_functions = [
  coprime1
]
