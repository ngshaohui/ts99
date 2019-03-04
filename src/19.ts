const rotate1 = (ls: any[], rotate_idx: number): any[] => {
  const xs = ls.reduce((acc: any[], cur: any, idx: number) => {
    if (idx < rotate_idx) { // 1 based index
      acc[1].push(cur)
    } else {
      acc[0].push(cur)
    }
    return acc
  }, [[], []])
  return xs[0].concat(...xs[1])
}

export const array_of_functions = [
  rotate1
]
