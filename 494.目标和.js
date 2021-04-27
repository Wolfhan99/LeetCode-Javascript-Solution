/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 *
 * https://leetcode-cn.com/problems/target-sum/description/
 *
 * algorithms
 * Medium (45.22%)
 * Likes:    642
 * Dislikes: 0
 * Total Accepted:    77.6K
 * Total Submissions: 171.5K
 * Testcase Example:  '[1,1,1,1,1]\n3'
 *
 * 给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。对于数组中的任意一个整数，你都可以从 + 或
 * -中选择一个符号添加在前面。
 * 
 * 返回可以使最终数组和为目标数 S 的所有添加符号的方法数。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：nums: [1, 1, 1, 1, 1], S: 3
 * 输出：5
 * 解释：
 * 
 * -1+1+1+1+1 = 3
 * +1-1+1+1+1 = 3
 * +1+1-1+1+1 = 3
 * +1+1+1-1+1 = 3
 * +1+1+1+1-1 = 3
 * 
 * 一共有5种方法让最终目标和为3。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 数组非空，且长度不会超过 20 。
 * 初始的数组的和不会超过 1000 。
 * 保证返回的最终结果能被 32 位整数存下。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let sum = 0;
  for (num of nums) { sum += num; }
  if (target > sum) return 0;
  if ((target + sum) % 2 === 1) return 0;
  /* 假设加法的总和为x,那么减法的总和就是sum-x。 则x-(sum-x) = target
    可以推出x = (target + sum) / 2
    此时，问题就转化成，装满容量为x的背包，有几种方法！
  */
  let bagSize = Math.floor((target + sum) / 2);
  // dp[j]代表的含义，填满容量为j的背包，有dp[j]种方法，因为填满容量为0的背包有且只有
  // 一种方法，所以dp[0] = 1
  const dp = new Array(bagSize + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = bagSize; j >= nums[i]; j--) {
      /* 确定递推公式吗，在不考虑nums[i]的情况下，填满容量为j-nums[i]的背包有dp[j-nums[i]]种方法
        只要搞到nums[i]的话，、 那么dp[j]就有dp[j-nums[i]]种方法  
        则把这些方法累加起来就可以了，dp[j] += dp[j-nums[i]]
        当前填满容量为j的方法数 = 之前填满容量为j的方法数 + 之前填满容量为j - num的包的方法数
        也就是当前数num的加入，可以把之前和为j - num的方法数加入进来。
      */
      dp[j] = dp[j] + dp[j - nums[i]];
    }
  }
  return dp[bagSize];
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findTargetSumWays;
// @after-stub-for-debug-end