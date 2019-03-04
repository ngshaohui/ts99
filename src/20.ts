const removeAt1 = (ls: any[], drop_idx: number): any[] => {
  return ls.reduce((acc: any[], cur: any, idx: number) => {
    if (idx !== drop_idx - 1) {
      acc[1].push(cur)
    } else {
      acc[0] = cur
    }
    return acc
  }, [null, []])
}

export const array_of_functions = [
  removeAt1
]
