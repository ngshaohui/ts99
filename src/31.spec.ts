import { array_of_functions } from './31'
import { describe, it, expect } from 'vitest'

describe('isPrime 3', () => {

  it('should return true', () => {
    for (let f of array_of_functions) {
      const res = f(3);
      expect(res).toBe(true)
    }
  })

})

describe('isPrime 1', () => {

  it('should return false', () => {
    for (let f of array_of_functions) {
      const res = f(1);
      expect(res).toBe(false)
    }
  })

})

describe('isPrime 3733', () => {

  it('should return true', () => {
    for (let f of array_of_functions) {
      const res = f(3733);
      expect(res).toBe(true)
    }
  })

})

describe('isPrime 34120', () => {

  it('should return false', () => {
    for (let f of array_of_functions) {
      const res = f(1);
      expect(res).toBe(false)
    }
  })

})
