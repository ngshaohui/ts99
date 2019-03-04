const dropEvery1 = (ls: any[], drop_idx: number): any[] => {
  return ls.reduce((acc: any[], cur: any, idx: number) => {
    if ((idx + 1) % drop_idx !== 0) { // 1 based index
      acc.push(cur)
    }
    return acc
  }, [])
}

export const array_of_functions = [
  dropEvery1
]
