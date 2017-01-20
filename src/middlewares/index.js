import morgan from 'morgan'
import compression from 'compression'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import helmet from 'helmet'
import methodOverride from 'method-override'
import { compose } from 'compose-middleware'
import config from '../config'

const middlewares = [
  morgan('dev'),
  compression(),
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
  cookieParser(),
  cors(),
  helmet(),
  methodOverride()
]

if (config.env === 'test') middlewares.shift()

export errorHandler from './errorhandler'
export notFound from './notfound'
export default () => compose(middlewares)
