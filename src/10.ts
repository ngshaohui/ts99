const encode1 = (ls: any[]): any[] => {
  const xs = ls.reduce((acc: any[], cur: any) => {
    if (acc.length === 0 || cur !== acc[0][1]) {
      acc.unshift([1, cur])
      return acc
    } else {
      acc[0][0] = acc[0][0] + 1
      return acc
    }
  }, [])
  xs.reverse()
  return xs
}

export const array_of_functions = [
  encode1
]
