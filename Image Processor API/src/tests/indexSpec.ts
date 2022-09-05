import app from "../index";
import supertest from "supertest";

const request = supertest(app);

describe("Test endpoints responses", () => {
  it("Server is running", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
  });
});
