// reduce args (acc, cur, idx, src)
const myReverse1 = (xs: any[]): any[] => {
  return xs.reduce((acc: any[], cur: any) => {
    acc.unshift(cur) // add to front
    return acc
  }, [])
}

const myReverse2 = (xs: any[]): any[] => {
  return xs.reduceRight((acc: any[], cur: any) => {
    acc.push(cur) // add to back
    return acc
  }, [])
}

// WARNING mutates the list
const myReverse3 = (xs: any[]): any[] => {
  const ys = [...xs]
  ys.reverse() // .reverse() modifies the list
  return ys
}

export const array_of_functions = [
  myReverse1,
  myReverse2,
  myReverse3
]
