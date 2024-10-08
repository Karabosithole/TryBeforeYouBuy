const request = require('supertest');
const express = require('express');
const app = require('./index'); // Make sure this points to your app

describe('API Tests', () => {
  it('GET / should return "Fashion Fit Simulator Backend"', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Fashion Fit Simulator Backend');
  });

  it('GET /api/clothing should return 404 if no items are present', async () => {
    const res = await request(app).get('/api/clothing');
    expect(res.statusCode).toEqual(404);
  });

  it('POST /api/clothing should create a new item', async () => {
    const res = await request(app)
      .post('/api/clothing')
      .send({
        name: 'T-Shirt',
        size: 'M',
        price: 20
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toBe('T-Shirt');
  });
});
