import dotenv from 'dotenv'
import path from 'path'

const currentEnv = process.env.NODE_ENV || 'local'
const currentPath = path.resolve(process.cwd()) + '/.env' + '.' + currentEnv

dotenv.config({ path: currentPath })

const port = process.env.PORT || 3000

const environmentVariables = {
  apiBaseUrl: process.env.API_BASE_URL + port,
  port
}

export default environmentVariables
