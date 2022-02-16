const request = require("supertest");
const app = require("../src/app");

describe("GET /api/books/all", () => {
  test("should return 200", async () => {
    await request(app).get("/api/books/all").send().expect(200);
  });

  test("should return 200 and expected result format as array", async () => {
    const res = await request(app).get("/api/books/all").send().expect(200);
    expect(res.body).toEqual(expect.any(Array));
  });

  test("should return 200 and expected result of length 2", async () => {
    const res = await request(app).get("/api/books/all").send().expect(200);
    expect(res.body).toHaveLength(2);
  });

  test("should return 200 and result of first book should contain these keys", async () => {
    const res = await request(app).get("/api/books/all").send().expect(200);
    expect(res.body[0]).toHaveProperty(
      "title",
      "price",
      "language",
      "sameAuthor"
    );
  });

  test("should return 200 and result of first book should match", async () => {
    const expected = {
      title: "The Island of Missing Trees",
      price: 16.0,
      language: "English",
      sameAuthor: ["The Forty Rules of Love", "The Architect's Apprentice"],
    };
    const res = await request(app).get("/api/books/all").send().expect(200);
    expect(res.body[0]).toMatchObject({
      title: expected.title,
      price: expected.price,
      language: expected.language,
      sameAuthor: expected.sameAuthor,
    });
  });
});

describe("GET /api/books", () => {
  test("should return 404", async () => {
    await request(app).get("/api/books").send().expect(404);
  });
});
