const myLast1 = (xs: any[]): any => {
  return xs[xs.length - 1]
}

const myLast2 = (xs: any[]): any => {
  if (xs.length == 1) {
    return xs[0]
  } else {
    return myLast2(xs.slice(1))
  }
}

export const array_of_functions = [
  myLast1,
  myLast2
]
