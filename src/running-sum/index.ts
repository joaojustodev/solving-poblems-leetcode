export function runningSum(nums: number[]): (number | undefined)[] {
  // nums = [1,2,3,4]
  // começar a somar do index 0 ate o index do número atual

  let newNums: number[] = [];

  nums.reduce((prevVal, elem) => {
    newNums.push(prevVal + elem);
    return prevVal + elem;
  }, 0);

  return newNums;
}
