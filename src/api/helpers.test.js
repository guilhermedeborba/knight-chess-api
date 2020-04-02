import keys from 'lodash/keys'
import uniq from 'lodash/uniq'
import { getValidCells } from './helpers'
import Mock from '../constants/mocks/valid-cells'

describe('function getValidCells', () => {
  describe('Positive tests', () => {
    test('Should return only valid cells', () => {
      keys(Mock.corners, pos => {
        expect(validCells).toStrictEqual(Mock.corners[pos])
      })
    })
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

    test('Should not return repeated cells', () => {
      keys(Mock.corners, pos => {
        expect(uniq(validCells)).toBeTruthy()
      })
    })
  })
})
