const isPrime1 = (num: number): boolean => {
  if (num < 2) {
    return false
  }
  let i: number = 0
  while (i < num) {
    if (num / i == 0) {
      return false
    }
    i += 1
  }
  return true
}

export const array_of_functions = [
  isPrime1
]
