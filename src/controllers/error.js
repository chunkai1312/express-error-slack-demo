import createError from 'http-errors'

export function badRequest (req, res, next) {
  next(createError(400))
}

export function internalServerError (req, res, next) {
  next(createError(500))
}
