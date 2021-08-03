let nums = read_line().split(" ").map(item => Number(item));
console.log(minOperations(nums));

function minOperations(nums) {
  const sum = nums.reduce((prev, cur) => prev + cur);
  const len = nums.length;
  if (sum % len !== 0){
    return -1;
  }
    const avg = sum / len; // 一定是整数
    let count = 0;
    for(const num of nums){
      count += Math.abs(num - avg);
    }
    return count / 2;
}

// console.log(minOperations([2,2,3,5]))
