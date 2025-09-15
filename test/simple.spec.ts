function multiply(a: number, b: number) {
  return a * b;
}

describe("Multiply", () => {
  it("should multiply numbers correctly", () => {
    expect(multiply(3, 2)).toBe(9);
  });
});
