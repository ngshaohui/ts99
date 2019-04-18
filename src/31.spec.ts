import { array_of_functions } from './31'
import { expect } from 'chai'
import 'mocha'

describe('isPrime 3', () => {

  it('should return true', () => {
    for (let f of array_of_functions) {
      const res = f(3);
      expect(res).to.equals(true)
    }
  })

})

describe('isPrime 1', () => {

  it('should return false', () => {
    for (let f of array_of_functions) {
      const res = f(1);
      expect(res).to.equals(false)
    }
  })

})

describe('isPrime 3733', () => {

  it('should return true', () => {
    for (let f of array_of_functions) {
      const res = f(3733);
      expect(res).to.equals(true)
    }
  })

})

describe('isPrime 34120', () => {

  it('should return false', () => {
    for (let f of array_of_functions) {
      const res = f(1);
      expect(res).to.equals(false)
    }
  })

})
