import Express from 'express'
import validCellsRoutes from './valid-cells'

const Router = Express.Router()

Router.use('/valid-cells', validCellsRoutes)

export default Router
