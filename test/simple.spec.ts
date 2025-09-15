function sum(a: number, b: number) {
  return a + b;
}

describe("sum", () => {
  it("should add numbers correctly", () => {
    expect(sum(3, 3)).toBe(5);
  });
});
