const flatten1 = (ls: any[]): any[] => {
  return ls.reduce((acc: any[], cur: any) => {
    if (Array.isArray(cur)) {
      return acc.concat(flatten1(cur))
    } else {
      acc.push(cur)
      return acc
    }
  }, [])
}

export const array_of_functions = [
  flatten1
]
