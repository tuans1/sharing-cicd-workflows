function multiply(a: number, b: number) {
  return a * b;
}

describe("AAA", () => {
  it("should multiply numbers correctly", () => {
    expect(multiply(3, 3)).toBe(9);
  });
});
