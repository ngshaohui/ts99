const encodeDirect1 = (ls: any[]): any[] => {
  const xs = ls.reduce((acc: any[], cur: any, idx: number, arr: any[]) => {
    const elem = acc[0]
    if (elem === cur) {
      acc[1] = acc[1] + 1 // increase freq
    } else if (elem === null) {
      acc[0] = cur // set reference
      acc[1] = 1 //set freq
    } else {
      const freq = acc[1]
      if (freq > 1) {
        acc[2].push([freq, elem])
      } else {
        acc[2].push(elem)
      }
      acc[0] = cur // update ref
      acc[1] = 1 // update freq
    }
    if (idx === arr.length - 1) { // force write
      const freq = acc[1]
      if (freq > 1) { // freq > 1 implies reference not written
        acc[2].push([freq, elem])
      } else { // freq == 1 implies reference already written
        acc[2].push(cur)
      }
    }
    return acc
  }, [null, 1, []]) // ref freq arr
  return xs[2]
}

export const array_of_functions = [
  encodeDirect1
]
