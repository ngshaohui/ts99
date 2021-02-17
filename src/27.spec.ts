import { array_of_functions } from './27'
import { expect } from 'chai'
import 'mocha'

const list_1 = ["abc","de","fgh","de","ijkl","mn","o"]
const list_2 = [[1, 2], [7, 8, 9, 10], [4, 5, 6], [3]]

describe('lsort', () => {

  it('should sort list_1', () => {
    for (let f of array_of_functions) {
      const res = f(list_1);
      expect(res).to.deep.equal(["o","de","de","mn","abc","fgh","ijkl"])
    }
  })

  it('should sort list_2', () => {
    for (let f of array_of_functions) {
      let res = f(list_2);
      expect(res).to.deep.equal([[3], [1, 2], [4, 5, 6], [7, 8, 9, 10]])
    }
  })

})
