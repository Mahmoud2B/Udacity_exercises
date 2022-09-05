import app from "../..";
import supertest from "supertest";

const request = supertest(app);

describe("Image processor middleware", () => {
  it("Should be 200", async () => {
    const result = await request.get(
      "/api/image?fileName=image&width=300&height=300"
    );
    expect(result.status).toEqual(200);
  });

  it("Should throw 400 if filename do not exist in the query", async () => {
    const result = await request.get("/api/image?width=300&height=300");
    expect(result.status).toBe(400);
  });

  it("Should throw 400 if width do not exist in the query", async () => {
    const result = await request.get("/api/image?fileName=file&height=300");
    expect(result.status).toBe(400);
  });

  it("Should throw 400 if height do not exist in the query", async () => {
    const result = await request.get("/api/image?fileName=file&width=300");
    expect(result.status).toBe(400);
  });
});
