const request = require('supertest')
const app = require('../server')
const mongoose = require('../db_config/mongoose')
describe('Post Endpoints', () => {
  it('should create a new contact', async () => {
    const res = await request(app)
      .post('/api/v1/contact/create')
      .send({
        name: 'Uday',
        type: 'business',
        number: '9700884342'
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('post')
  })
})

describe('Get Endpoints', () => {
    it('should get  all contacts', async () => {
      const res = await request(app)
        .get('/api/v1/contact/?type=business')
      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('post')
    })
  })


  describe('Patch Endpoints', () => {
    it('should update a new contact', async () => {
      const res = await request(app)
        .patch('/api/v1/contact/update?id=62988b3d36b90214d041b243')
        .send({
            name: 'Uday',
            type: 'Personal',
            number: '9700884342'
          })
      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('post')
    })
  })


  describe('delete Endpoints', () => {
    it('should Delete a new contact', async () => {
      const res = await request(app)
        .delete('/api/v1/contact/delete?id=62988b3d36b90214d041b243')
      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('post')
    })
  })