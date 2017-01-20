import {expect} from 'chai'
import request from 'supertest'
import app from '../src/app'

describe('Express Error Slack Demo', () => {
  describe('GET /400', () => {
    it('should respond 400', () => {
      return request(app)
        .get('/400')
        .expect('Content-Type', /json/)
        .expect(400)
        .then(res => expect(res.body.status).to.equal(400))
    })
  })

  describe('GET /500', () => {
    it('should respond 500', () => {
      return request(app)
        .get('/500')
        .expect('Content-Type', /json/)
        .expect(500)
        .then(res => expect(res.body.status).to.equal(500))
    })
  })

  describe('GET /test', () => {
    it('should respond 404', () => {
      return request(app)
        .get('/test')
        .expect('Content-Type', /json/)
        .expect(404)
        .then(res => expect(res.body.status).to.equal(404))
    })
  })
})
