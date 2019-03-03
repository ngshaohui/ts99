import { array_of_functions } from './6'
import { expect } from 'chai'
import 'mocha'

const list_1 = [4, 2, 5, 2, 4, 1, 8, 11, 2]
const list_2 = [4, 2, 5, 2, 4]

describe('check if list_1 is palindrome', () => {

  it('should return false', () => {
    for (let f of array_of_functions) {
      let res = f(list_1);
      expect(res).to.equal(false)
    }
  })

})

describe('check if list_2 is palindrome', () => {

  it('should return true', () => {
    for (let f of array_of_functions) {
      let res = f(list_2);
      expect(res).to.equal(true)
    }
  })

})