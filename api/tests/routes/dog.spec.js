/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  name: 'Pulgon',
  weightMin: 23,
  weightMax: 24,
  heightMin: 44,
  heightMax: 45,
  temperament: "loco",
  life_span: "10 years",
  image: "algo",
};


describe('Dogs routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Dog.sync({ force: true })
    .then(() => Dog.create(dog)));
  describe('GET /dogs', () => {
    it('should get 200', () =>
      agent.get('/dogs').expect(200)
    );
  });
});
describe("GET /dogs/:id", () => {
   
  it("Responde con status: 200",() => {
    agent.get("/dogs/1").expect(200);
 
  });

}); 