import Express from 'express'
import { getValidCells } from './helpers'
const Router = Express.Router()

Router.get('/', async (request, response) => {
  response.json({ validCells: getValidCells(request.query.position) })
})

export default Router
