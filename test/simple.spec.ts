function sum(a: number, b: number) {
  return a + b;
}

describe("sum", () => {
  it("should add numbers correctly", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
