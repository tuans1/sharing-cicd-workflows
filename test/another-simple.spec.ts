function sum(a: number, b: number) {
  return a + b;
}
describe("Sum", () => {
  it("should add numbers correctly", () => {
    expect(sum(3, 0)).toBe(6);
  });
});
