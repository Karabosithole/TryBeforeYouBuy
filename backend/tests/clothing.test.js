const request = require('supertest');
const express = require('express');

let app;

beforeEach(() => {
  // Setup app for each test case
  app = require('../index');
});

describe('Clothing API', () => {
  it('GET /api/clothing - should return 404 if no clothing items are found', async () => {
    const res = await request(app).get('/api/clothing');
    expect(res.statusCode).toEqual(404);
    expect(res.body.message).toEqual("No clothing items found");
  });

  it('POST /api/clothing - should add a new clothing item', async () => {
    const clothingData = { name: 'T-shirt', size: 'M', price: 25.99 };
    const res = await request(app).post('/api/clothing').send(clothingData);
    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toEqual('T-shirt');
  });

  it('POST /api/clothing - should return 400 if required fields are missing', async () => {
    const incompleteData = { size: 'M' };
    const res = await request(app).post('/api/clothing').send(incompleteData);
    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual("Missing required fields");
  });
});
