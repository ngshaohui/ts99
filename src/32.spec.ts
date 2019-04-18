import { array_of_functions } from './32'
import { expect } from 'chai'
import 'mocha'

describe('isPrime 3', () => {

  it('should return true', () => {
    for (let f of array_of_functions) {
      const res = f(36, 63);
      expect(res).to.equals(9)
    }
  })

})

describe('isPrime 1', () => {

  it('should return false', () => {
    for (let f of array_of_functions) {
      const res = f(54, 24);
      expect(res).to.equals(6)
    }
  })

})
