const compress1 = (ls: any[]): any[] => {
  const xs = ls.reduce((acc: any[], cur: any) => {
    if (acc.length !== 0 && cur === acc[0]) {
      return acc
    } else {
      acc.unshift(cur)
      return acc
    }
  }, [])
  xs.reverse()
  return xs
}

export const array_of_functions = [
  compress1
]
