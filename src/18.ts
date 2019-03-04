const slice1 = (ls: any[], start_idx: number, end_idx: number): any[] => {
  return ls.reduce((acc: any[], cur: any, idx: number) => {
    if (idx >= start_idx - 1 && idx < end_idx) { // 1 based index
      acc.push(cur)
    }
    return acc
  }, [])
}

export const array_of_functions = [
  slice1
]
