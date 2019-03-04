const range1 = (start: number, end: number): number[] => {
  const ls = []
  for (let i = start; i <= end; i++) {
    ls.push(i)
  }
  return ls
}

const range2 = (start: number, end: number): number[] => {
  const helper = (start: number, end: number, ls: number[]): number[] => {
    if (start > end) {
      return ls
    } else {
      ls.push(start)
      return helper(start + 1, end, ls)
    }
  }
  return helper(start, end, [])
}

export const array_of_functions = [
  range1,
  range2
]
