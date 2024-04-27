 const request = require('supertest')
// const app = require('../server')
// const mongoose = require('../db_config/mongoose')

// describe('GET /api/data', () => {
//   it('responds with JSON', async () => {
//     // Send GET request to /api/data endpoint
//     const response = await request(app).get('/api/data');

//     // Check that the response status code is 200 (OK)
//     expect(response.statusCode).toBe(200);

//     // Check that the response content type is JSON
//     expect(response.headers['content-type']).toMatch(/json/);

//     // Check that the response body contains the expected message
//     expect(response.body.message).toBe('Hello, world!');
//   })
// });

// describe('Post Endpoints', () => {
//   it('should create a new contact', async () => {
//     const res = await request(app)
//       .post('/api/v1/contact/create')
//       .send({
//         name: 'Uday',
//         type: 'business',
//         number: '9700884342'
//       })
//     expect(res.statusCode).toEqual(200)
//   })
//})

// describe('Get Endpoints', () => {
//     it('should get  all contacts', async () => {
//       const res = await request(app)
//         .get('/api/v1/contact/?type=business')
//       expect(res.statusCode).toEqual(200)
//     })
//   })
