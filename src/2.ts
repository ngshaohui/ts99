const myButLast1 = (xs: any[]): any => {
  return xs[xs.length - 2]
}

const myButLast2 = (xs: any[]): any => {
  if (xs.length == 2) {
    return xs[0]
  } else {
    return myButLast2(xs.slice(1))
  }
}

export const array_of_functions = [
  myButLast1,
  myButLast2
]
