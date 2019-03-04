import { array_of_functions } from './23'
import { expect } from 'chai'
import 'mocha'

const list_1 = [4, 2, 5, 2, 4, 1, 8, 11, 2]
// const list_2 = [4, 2, 5, 2, 4]
// const list_3 = [1, 2, [3, 4, 5], 6, [7, 8], 9]
// const list_4 = [1, [2, [3, 4, [5], 6]], 7, [8, [9]]]
const list_5 = [1, 1, 1, 2, 3, 4, 4, 4, 3, 2, 2, 1, 2]
// const list_6 = [[3, 1], 2, 3, [3, 4], 3, [2, 2], 1, 2]

describe('rndSelect list_1', () => {

  it('should return (undeterministic)', () => {
    for (let f of array_of_functions) {
      const res = f(list_1, 4);
      for (let e of res) {
        expect(list_1).to.include(e)
      }
    }
  })

})

describe('rndSelect list_5', () => {

  it('should return (undeterministic)', () => {
    for (let f of array_of_functions) {
      const res = f(list_5, 10);
      for (let e of res) {
        expect(list_5).to.include(e)
      }
    }
  })

})
