import { array_of_functions } from './7'
import { expect } from 'chai'
import 'mocha'

const list_1 = [4, 2, 5, 2, 4, 1, 8, 11, 2]
const list_2 = [4, 2, 5, 2, 4]
const list_3 = [1, 2, [3, 4, 5], 6, [7, 8], 9]
const list_4 = [1, [2, [3, 4, [5], 6]], 7, [8, [9]]]

describe('flatten list_1', () => {

  it('should return [4, 2, 5, 2, 4, 1, 8, 11, 2]', () => {
    for (let f of array_of_functions) {
      let res = f(list_1);
      expect(res).to.deep.equal([4, 2, 5, 2, 4, 1, 8, 11, 2])
    }
  })

})

describe('flatten list_2', () => {

  it('should return [4, 2, 5, 2, 4]', () => {
    for (let f of array_of_functions) {
      let res = f(list_2);
      expect(res).to.deep.equal([4, 2, 5, 2, 4])
    }
  })

})

describe('flatten list_3', () => {

  it('should return [1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
    for (let f of array_of_functions) {
      let res = f(list_3);
      expect(res).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9])
    }
  })

})

describe('flatten list_4', () => {

  it('should return [1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
    for (let f of array_of_functions) {
      let res = f(list_4);
      expect(res).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9])
    }
  })

})