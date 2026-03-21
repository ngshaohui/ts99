import { array_of_functions } from './33'
import { describe, it, expect } from 'vitest'

describe('coprime 36 63', () => {

  it('should return false', () => {
    for (let f of array_of_functions) {
      const res = f(36, 63);
      expect(res).toBe(false)
    }
  })

})

describe('coprime 35 64', () => {

  it('should return true', () => {
    for (let f of array_of_functions) {
      const res = f(35, 64);
      expect(res).toBe(true)
    }
  })

})
