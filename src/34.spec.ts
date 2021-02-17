import { array_of_functions } from './34'
import { expect } from 'chai'
import 'mocha'

describe('totient', () => {

  it('should calculate totient', () => {
    for (let f of array_of_functions) {
      const res = f(10);
      expect(res).to.equals(4)
    }
  })

})
