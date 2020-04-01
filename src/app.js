import Express from 'express'
import Api from './api.js'

const App = Express()

App.use(Api)

export default App
