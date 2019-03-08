// https://codereview.stackexchange.com/a/7042
const combinations1 = (ls: any[], size: number): any[] => {
  const res: any[] = []
  const helper = (xs: any[], ys: any[]): any[] => {
    for (let i = 0; i < ys.length; i++) {
      const sub_list = xs.concat(ys[i])
      if (sub_list.length === size) {
        res.push(sub_list)
      }
      helper(xs.concat(ys[i]), ys.slice(i + 1));
    }

    return res
  }

  return helper([], ls)
}

export const array_of_functions = [
  combinations1
]
