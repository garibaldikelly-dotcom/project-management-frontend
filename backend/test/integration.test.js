const request = require('supertest');


const app = (req, res) => {
res.statusCode = 200;
res.end('OK');
};


test('Integración servidor-cliente', async () => {
const response = await request(app).get('/');
expect(response.statusCode).toBe(200);
});