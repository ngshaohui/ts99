const rndPermu1 = (ls: any[]): any[] => {
  const xs: any[] = [...ls]
  let rand_idx: number
  let temp: any
  // knuth shuffle
  for (let i = 0; i < xs.length; i++) {
    rand_idx = Math.floor((Math.random() * xs.length))
    temp = xs[i]
    xs[i] = xs[rand_idx]
    xs[rand_idx] = temp
  }
  return xs
}

export const array_of_functions = [
  rndPermu1
]
