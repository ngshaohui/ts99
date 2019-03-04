import { array_of_functions } from './24'
import { expect } from 'chai'
import 'mocha'

const list_1 = [4, 2, 5, 2, 4, 1, 8, 11, 2]
// const list_2 = [4, 2, 5, 2, 4]
// const list_3 = [1, 2, [3, 4, 5], 6, [7, 8], 9]
// const list_4 = [1, [2, [3, 4, [5], 6]], 7, [8, [9]]]
const list_5 = [1, 1, 1, 2, 3, 4, 4, 4, 3, 2, 2, 1, 2]
// const list_6 = [[3, 1], 2, 3, [3, 4], 3, [2, 2], 1, 2]

// from 22
const range1 = (start: number, end: number): number[] => {
  const ls = []
  for (let i = start; i <= end; i++) {
    ls.push(i)
  }
  return ls
}

describe('diffSelect 1, 49', () => {

  it('should return (undeterministic)', () => {
    for (let f of array_of_functions) {
      const res = f(6, 49);
      let full_range = range1(1, 49)
      for (let e of res) {
        expect(full_range).to.include(e)
      }
    }
  })

})

describe('diffSelect 10, 100', () => {

  it('should return (undeterministic)', () => {
    for (let f of array_of_functions) {
      const res = f(10, 100);
      let full_range = range1(1, 100)
      for (let e of res) {
        expect(full_range).to.include(e)
      }
    }
  })

})
