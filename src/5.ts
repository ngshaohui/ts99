const myReverse1 = (xs: any[]): any[] => {
  return xs.reverse()
}

// reduce args (acc, cur, idx, src)
const myReverse2 = (xs: any[]): any[] => {
  return xs.reduce((acc: any[], cur: any) => {
    acc.push(cur) // THIS SHOULD BE UNSHIFT??????????
    return acc
  }, [])
}

export const array_of_functions = [
  myReverse1,
  myReverse2
]
