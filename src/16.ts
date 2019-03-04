const dropEvery1 = (ls: any[], drop_idx: number): any[] => {
  return ls.reduce((acc: any[], cur: any, idx: number) => {
    if (idx !== drop_idx - 1) {
      acc.push(cur)
    }
    return acc
  }, [])
}

export const array_of_functions = [
  dropEvery1
]
