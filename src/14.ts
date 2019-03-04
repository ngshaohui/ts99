const dupli1 = (ls: any[]): any[] => {
  return ls.reduce((acc: any[], cur: any) => {
    acc.push(cur)
    acc.push(cur)
    return acc
  }, [])
}

export const array_of_functions = [
  dupli1
]
