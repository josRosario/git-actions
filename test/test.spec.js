import request from "supertest";

describe("TEST APP", () => {
  it("This is a simle test", async () => {
    const response = 4 + 4;

    expect(response).toBe(7);
  });
});
