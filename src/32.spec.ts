import { array_of_functions } from './32'
import { expect } from 'chai'
import 'mocha'

describe('gcd 36 63', () => {

  it('should return 9', () => {
    for (let f of array_of_functions) {
      const res = f(36, 63);
      expect(res).to.equals(9)
    }
  })

})

describe('gcd 54 24', () => {

  it('should return 6', () => {
    for (let f of array_of_functions) {
      const res = f(54, 24);
      expect(res).to.equals(6)
    }
  })

})
