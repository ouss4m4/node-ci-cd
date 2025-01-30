import request from "supertest";
import app from "../src/server.js";
import { describe, it, expect, beforeAll, afterAll } from "@jest/globals";

let server;

beforeAll(() => {
  server = app.listen(4000); // Start a test server
});

afterAll((done) => {
  server.close(done); // Ensure the server is closed
});
describe("API Tests", () => {
  it("should return 200 for /health", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });
});
