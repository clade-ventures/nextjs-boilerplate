import { getToken } from ".";

describe("HTTP test", () => {
  it("Should return a token", () => {
    expect(getToken({ auth: { token: "123" } })).toEqual("123");
  });

  it("Should return a null token", () => {
    expect(getToken({ auth: {} })).toEqual(null);
  });

  it("Should return a data when use server side fetch", () => {});

  it("Should return a data when use client side fetch", () => {});
});
