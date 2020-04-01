import Express from 'express'
import Cors from 'cors'
import Api from './api.js'
import Env from './config/env'

const App = Express()

const corsOptions = {
  origin: Env.appBaseUrl,
  optionsSuccessStatus: 200
}

App.use(Cors(corsOptions))
App.use(Api)

export default App
