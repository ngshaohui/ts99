import { array_of_functions } from './3'
import { expect } from 'chai'
import 'mocha'

const list_1 = [4, 2, 5, 2, 4, 1, 8, 11, 2]

describe('sixth element in list_1', () => {

  it('should return 11', () => {
    for (let f of array_of_functions) {
      let res = f(list_1, 6);
      expect(res).to.equal(1)
    }
  })

})