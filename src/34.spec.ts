import { array_of_functions } from './34'
import { describe, it, expect } from 'vitest'

describe('totient', () => {

  it('should calculate totient', () => {
    for (let f of array_of_functions) {
      const res = f(10);
      expect(res).toBe(4)
    }
  })

})
