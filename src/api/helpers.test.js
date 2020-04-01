import keys from 'lodash/keys'
import { getValidCells } from './helpers'
import Mock from '../constants/mocks/valid-cells'

describe('function getValidCells', () => {
  describe('Positive tests', () => {
    test('Should return only valid cells', () => {
      keys(Mock.corners, pos => {
        expect(validCells).toStrictEqual(Mock.corners[pos])
      })
    })

    test.todo('Should return valid cells under the board limit')
  })

  describe('Negative tests', () => {
    test('Should throw error when current position is not in algebraic notation', () => {
      try {
        const result = getValidCells('abcd')
      } catch (error) {
        expect(error).toBeInstanceOf(TypeError)
        expect(error.message).toBe(
          'Expect argument to be in algebraic notation: /[A-H][1-8]/'
        )
      }
    })

    test.todo('Should not return repeated cells')
  })
})
