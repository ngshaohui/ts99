const lsort1 = (ls: any[][] | string[]) => {
  return [...ls].sort((xs, ys) => {
    if (xs.length < ys.length) {
      return -1
    }
    if (xs.length > ys.length) {
      return 1
    }
    return 0
  })
}

export const array_of_functions = [
  lsort1
]
