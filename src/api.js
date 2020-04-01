import Express from 'express'
import routes from './api/index.js'

const Router = Express.Router()

Router.use('/api', routes)

export default Router
