import { array_of_functions } from './5'
import { expect } from 'chai'
import 'mocha'

const list_1 = [4, 2, 5, 2, 4, 1, 8, 11, 2]

describe('reverse list_1', () => {

  it('should return [2, 11, 8, 1, 4, 2, 5, 2, 4]', () => {
    for (let f of array_of_functions) {
      let res = f(list_1);
      expect(res).to.deep.equal([2, 11, 8, 1, 4, 2, 5, 2, 4])
    }
  })

})