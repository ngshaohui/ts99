const repli1 = (ls: any[], freq: number): any[] => {
  return ls.reduce((acc: any[], cur: any) => {
    for (let i = 0; i < freq; i++) {
      acc.push(cur);
    }
    return acc
  }, [])
}

export const array_of_functions = [
  repli1
]
