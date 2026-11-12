import request from "supertest";
import { describe, expect, it } from "vitest";
import { app } from "../src/server";

describe("GET /users", () => {
  it("returns the user list", async () => {
    const res = await request(app).get("/users");
    expect(res.status).toBe(200);
    expect(res.body).toEqual([
      { id: 1, name: "Ada Lovelace" },
      { id: 2, name: "Alan Turing" },
    ]);
  });
});
