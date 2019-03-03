const pack1 = (ls: any[]): any[] => {
  const xs = ls.reduce((acc: any[], cur: any) => {
    if (acc.length === 0 || cur !== acc[0][0]) {
      acc.unshift([].concat([cur]))
      return acc
    } else {
      acc[0].unshift(cur)
      return acc
    }
  }, [])
  xs.reverse()
  return xs
}

export const array_of_functions = [
  pack1
]
