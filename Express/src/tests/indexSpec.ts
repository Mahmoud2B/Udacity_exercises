import app from "../index";
import supertest from "supertest";

const request = supertest(app);

describe("Test endpoints responses", () => {
  it("/ (index) should return 404 (not accessible)", async (done) => {
    const response = await request.get("/");
    expect(response.status).toEqual(404);
    done();
  });
  it("/api should return 200", async (done) => {
    const response = await request.get("/api");
    expect(response.status).toEqual(200);
    done();
  });
});
