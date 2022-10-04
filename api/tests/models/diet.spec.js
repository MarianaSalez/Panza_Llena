const { Diet, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Diet model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Diet.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Diet.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', (done) => {
        Diet.create({ name: 'Comida de la yiya' })
        .then(() => done());
      });
    });
    
  });
});
