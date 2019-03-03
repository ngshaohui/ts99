import { array_of_functions } from './10'
import { expect } from 'chai'
import 'mocha'

const list_1 = [4, 2, 5, 2, 4, 1, 8, 11, 2]
// const list_2 = [4, 2, 5, 2, 4]
// const list_3 = [1, 2, [3, 4, 5], 6, [7, 8], 9]
// const list_4 = [1, [2, [3, 4, [5], 6]], 7, [8, [9]]]
const list_5 = [1, 1, 1, 2, 3, 4, 4, 4, 3, 2, 2, 1, 2]

describe('encode list_1', () => {

  it('should return [[1, 4], [1, 2], [1, 5], [1, 2], [1, 4], [1, 1], [1, 8], [1, 11], [1, 2]]', () => {
    for (let f of array_of_functions) {
      let res = f(list_1);
      expect(res).to.deep.equal([[1, 4], [1, 2], [1, 5], [1, 2], [1, 4], [1, 1], [1, 8], [1, 11], [1, 2]])
    }
  })

})

describe('encode list_6', () => {

  it('should return [[3, 1], [1, 2], [1, 3], [3, 4], [1, 3], [2, 2], [1, 1], [1, 2]]', () => {
    for (let f of array_of_functions) {
      let res = f(list_5);
      expect(res).to.deep.equal([[3, 1], [1, 2], [1, 3], [3, 4], [1, 3], [2, 2], [1, 1], [1, 2]])
    }
  })

})
