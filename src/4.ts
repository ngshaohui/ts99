const myLength1 = (xs: any[]): any => {
  return xs.length
}

// reduce args (acc, cur, idx, src)
const myLength2 = (xs: any[]): any => {
  return xs.reduce((acc: number) => {
    return acc + 1
  }, 0)
}

export const array_of_functions = [
  myLength1,
  myLength2
]
