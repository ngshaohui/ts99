const decodeModified1 = (ls: any[]): any[] => {
  const xs = ls.reduce((acc: any[], cur: any) => {
    if (Array.isArray(cur)) {
      const freq = cur[0]
      const elem = cur[1]
      for (let i = 0; i < freq; i++) {
        acc.push(elem)
      }
    } else {
      acc.push(cur)
    }
    return acc
  }, [])
  return xs
}

export const array_of_functions = [
  decodeModified1
]
