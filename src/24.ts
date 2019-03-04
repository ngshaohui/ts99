const diffSelect1 = (freq: number, end_range: number): number[] => {
  const ref_set = new Set() // prevent duplicates
  let random_num_in_range: number
  const ls: number[] = []
  while (freq > 0) {
    random_num_in_range = Math.floor((Math.random() * end_range) + 1)
    if (!ref_set.has(random_num_in_range)) { // num not in set
      ref_set.add(random_num_in_range)
      ls.push(random_num_in_range)
      freq = freq - 1
    }
  }
  return ls
}

export const array_of_functions = [
  diffSelect1
]
