import Express from 'express'
import Env from './config/env'
import App from './app'

App.listen(Env.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started listening on ${Env.apiBaseUrl}`)
})

process.on('unhandledRejection', (reason, p) => {
  // eslint-disable-next-line no-console
  console.log({
    message: 'Unhandled Rejection',
    data: {
      reason,
      p
    }
  })
})
