import { array_of_functions } from './5'
import { describe, it, expect } from 'vitest'

const list_1 = [4, 2, 5, 2, 4, 1, 8, 11, 2]

describe('reverse list_1', () => {

  it('should return [2, 11, 8, 1, 4, 2, 5, 2, 4]', () => {
    for (let f of array_of_functions) {
      let res = f(list_1);
      expect(res).toEqual([2, 11, 8, 1, 4, 2, 5, 2, 4])
    }
  })

})