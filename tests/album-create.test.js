const { expect } = require('chai');
const request = require('supertest');
const getDb = require('../src/services/db');
const app = require('../src/app');

describe('create album', () => {
  let db;
  let artistId;

  beforeEach(async () => {
    db = await getDb();

    const result = await db.query('INSERT INTO Artist (name, genre) VALUES (?, ?)', [
      'Spice Girls',
      'pop',
    ]);

    artistId = result[0].insertId;
  });
  

  afterEach(async () => {
    await db.query('DELETE FROM Album');
    await db.close();
  });

  describe('/artist/:artistId/album', () => {
    describe('POST', () => {
      it('creates a new album in a database', async () => {
        const res = await request(app).post(`/artist/${artistId}/album`).send({
          name: 'Spice World',
          year: 1997,
        });

        expect(res.status).to.equal(201);

        const [[albumEntries]] = await db.query(
          `SELECT * FROM Album WHERE name = 'Spice World'`
        );

        expect(albumEntries.name).to.equal('Spice World');
        expect(albumEntries.year).to.equal(1997);
      });
    });
  });
});