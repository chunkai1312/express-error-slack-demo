import apiErrorHandler from 'api-error-handler'
import errorToSlack from 'express-error-slack'
import { errors } from 'compose-middleware'
import config from '../config'

const handlers = [
  errorToSlack(config.slack),
  apiErrorHandler()
]

export default () => errors(handlers)
