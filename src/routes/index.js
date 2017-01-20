import { Router } from 'express'
import { error } from '../controllers'
import { notFound } from '../middlewares'

const router = Router()

router.use('/400', error.badRequest)
router.use('/500', error.internalServerError)
router.use('/*', notFound())

export default () => router
