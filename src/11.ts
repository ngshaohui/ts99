const encodeModified1 = (ls: any[]): any[] => {
  // from 10.ts
  const xs: any[] = ls.reduce((acc: any[], cur: any) => {
    if (acc.length === 0 || cur !== acc[0][1]) {
      acc.unshift([1, cur])
      return acc
    } else {
      acc[0][0] = acc[0][0] + 1
      return acc
    }
  }, [])
  xs.reverse()
  // end of 10.ts
  const ys = xs.map((cur: any[]) => {
    if (cur[0] === 1) {
      return cur[1]
    } else {
      return cur
    }
  })
  return ys
}

export const array_of_functions = [
  encodeModified1
]
