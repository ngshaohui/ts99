const insertAt1 = (elem: any, ls: any[], insert_idx: number): any[] => {
  return ls.reduce((acc: any[], cur: any, idx: number) => {
    if (idx === insert_idx - 1) {
      acc.push(elem)
    }
    acc.push(cur)
    return acc
  }, [])
}

export const array_of_functions = [
  insertAt1
]
