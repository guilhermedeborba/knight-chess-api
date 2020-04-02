import Express from 'express'
import { getValidCells } from './helpers'
const Router = Express.Router()

Router.get('/', (request, response) => {
  try {
    const validCells = getValidCells(request.query.position)
    response.json({ validCells })
  } catch (error) {
    if (error instanceof TypeError) {
      response.status(400).json({ error: error.message })
    }
  }
})

export default Router
