import flatten from 'lodash/flatten'
import isEmpty from 'lodash/isEmpty'
import uniq from 'lodash/uniq'

const columns = [, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

const isNotEmpty = v => !isEmpty(v)

const isAlgebraicNotation = v => v.match(/[A-H][1-8]/)

const toAlgebraic = (x, y) => columns[x] + y

const toArrayNumbers = algebr => {
  const [x, y] = algebr

  return [columns.indexOf(x), Number(y)]
}

const isValidCell = (x, y) => {
  return x <= 8 && x >= 1 && y <= 8 && y >= 1
}

const cells = (x, y, turn = 1) => {
  const possibleMoves = [
    [x - 1, y + 2],
    [x - 1, y - 2],
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x + 2, y + 1],
    [x + 2, y - 1]
  ]

  const validCells = possibleMoves.filter(pos => isValidCell(...pos))

  if (turn === 2) return validCells

  return flatten(validCells.map(([x, y]) => cells(x, y, turn + 1))).filter(
    isNotEmpty
  )
}

const getValidCells = initialPos => {
  if (!isAlgebraicNotation(initialPos))
    throw new TypeError(
      'Expect argument to be in algebraic notation: /[A-H][1-8]/'
    )

  const validCells = cells(...toArrayNumbers(initialPos))

  return uniq(validCells.map(pos => toAlgebraic(...pos)))
}

export { getValidCells }
