import { array_of_functions } from './22'
import { expect } from 'chai'
import 'mocha'

// const list_1 = [4, 2, 5, 2, 4, 1, 8, 11, 2]
// const list_2 = [4, 2, 5, 2, 4]
// const list_3 = [1, 2, [3, 4, 5], 6, [7, 8], 9]
// const list_4 = [1, [2, [3, 4, [5], 6]], 7, [8, [9]]]
// const list_5 = [1, 1, 1, 2, 3, 4, 4, 4, 3, 2, 2, 1, 2]
// const list_6 = [[3, 1], 2, 3, [3, 4], 3, [2, 2], 1, 2]

describe('range 4, 9', () => {

  it('should return [4, 5, 6, 7, 8, 9]', () => {
    for (let f of array_of_functions) {
      let res = f(4, 9);
      expect(res).to.deep.equal([4, 5, 6, 7, 8, 9])
    }
  })

})

describe('range 1, 10', () => {

  it('should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
    for (let f of array_of_functions) {
      let res = f(1, 10);
      expect(res).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    }
  })

})
