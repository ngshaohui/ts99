const rndSelect1 = (ls: any[], count: number): any[] => {
  const helper = (ls: any[], count: number, keep: any[]): any[] => {
    if (count === 0) {
      return keep
    }
    const pos = Math.floor((Math.random() * count))
    const xs = ls.reduce((acc: any[], cur: any, idx: number) => {
      if (idx === pos) {
        keep.push(cur)
      } else {
        acc.push(cur)
      }
      return acc
    }, [])
    return helper(xs, count - 1, keep)
  }
  return helper(ls, count, [])
}

export const array_of_functions = [
  rndSelect1
]
