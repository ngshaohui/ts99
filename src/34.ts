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

const totient1 = (m: number): number => {
  if (m == 1) {
    return 1
  }
  // array of numbers starting from 1
  const numRange = [...Array(m).keys()].slice(1)
  return numRange.filter((num) => coprime1(num, m)).length
}

export const array_of_functions = [
  totient1
]
