import { runningSum } from ".";

const nums = [1, 2, 3, 4];

describe("Running Sum of 1d Array", () => {
  it("should returns [1, 1+2, 1+2+3, 1+2+3+4....]", () => {
    expect(runningSum(nums)).toEqual([1, 3, 6, 10]);
  });
});
