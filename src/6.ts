const isPalindrome1 = (ls: any[]): boolean => {
  if (ls.length < 2) {
    return true
  }

  for (let i = 0; i < Math.floor(ls.length / 2); i++) {
    if (ls[i] !== ls[ls.length - i - 1]) {
      return false
    }
  }

  return true
}

const isPalindrome2 = (xs: any[]): boolean => {
  // shallow copy
  // const zs = Object.assign([], ls)
  // deep copy
  // const zs = [...ls] // ... expands the array into elements
  // ls.reverse() // .reverse() modifies the list
  // deep copy reverse list
  const ys = xs.reduce((acc: any[], cur: any) => {
    acc.unshift(cur)
    return acc
  }, [])
  const helper = (xs: any[], ys: any[]): boolean => {
    if (xs.length !== ys.length) {
      return false
    }
    if (xs.length === 0) {
      return true
    }
    if (xs[0] !== ys[0]) {
      return false
    } else {
      return helper(xs.slice(1), ys.slice(1))
    }
  }
  return helper(xs, ys)
}

export const array_of_functions = [
  isPalindrome1,
  isPalindrome2
]
