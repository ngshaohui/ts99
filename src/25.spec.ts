import { array_of_functions } from './25'
import { expect } from 'chai'
import 'mocha'

const list_1 = [4, 2, 5, 2, 4, 1, 8, 11, 2]
// const list_2 = [4, 2, 5, 2, 4]
// const list_3 = [1, 2, [3, 4, 5], 6, [7, 8], 9]
// const list_4 = [1, [2, [3, 4, [5], 6]], 7, [8, [9]]]
const list_5 = [1, 1, 1, 2, 3, 4, 4, 4, 3, 2, 2, 1, 2]
// const list_6 = [[3, 1], 2, 3, [3, 4], 3, [2, 2], 1, 2]

describe('rndPermu list_1', () => {

  it('should return (undeterministic)', () => {
    for (let f of array_of_functions) {
      const res = f(list_1);
      res.sort()
      const l1_sorted = [...list_1]
      l1_sorted.sort()
      expect(res).to.deep.equals(l1_sorted)
    }
  })

})

describe('rndPermu list_5', () => {

  it('should return (undeterministic)', () => {
    for (let f of array_of_functions) {
      const res = f(list_5);
      res.sort()
      const l5_sorted = [...list_5]
      l5_sorted.sort()
      expect(res).to.deep.equals(l5_sorted)
    }
  })

})
