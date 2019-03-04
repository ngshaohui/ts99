const split1 = (ls: any[], split_idx: number): any[] => {
  return ls.reduce((acc: any[], cur: any, idx: number) => {
    if (idx < split_idx) {
      acc[0].push(cur)
    } else {
      acc[1].push(cur)
    }
    return acc
  }, [[], []])
}

export const array_of_functions = [
  split1
]
