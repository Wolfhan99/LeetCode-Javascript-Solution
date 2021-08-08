/*
 * @lc app=leetcode.cn id=523 lang=javascript
 *
 * [523] 连续的子数组和
 *
 * https://leetcode-cn.com/problems/continuous-subarray-sum/description/
 *
 * algorithms
 * Medium (22.75%)
 * Likes:    302
 * Dislikes: 0
 * Total Accepted:    48.2K
 * Total Submissions: 188.9K
 * Testcase Example:  '[23,2,4,6,7]\n6'
 *
 * 给你一个整数数组 nums 和一个整数 k ，编写一个函数来判断该数组是否含有同时满足下述条件的连续子数组：
 * 
 * 
 * 子数组大小 至少为 2 ，且
 * 子数组元素总和为 k 的倍数。
 * 
 * 
 * 如果存在，返回 true ；否则，返回 false 。
 * 
 * 如果存在一个整数 n ，令整数 x 符合 x = n * k ，则称 x 是 k 的一个倍数。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [23,2,4,6,7], k = 6
 * 输出：true
 * 解释：[2,4] 是一个大小为 2 的子数组，并且和为 6 。
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [23,2,6,4,7], k = 6
 * 输出：true
 * 解释：[23, 2, 6, 4, 7] 是大小为 5 的子数组，并且和为 42 。 
 * 42 是 6 的倍数，因为 42 = 7 * 6 且 7 是一个整数。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [23,2,6,4,7], k = 13
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 0 
 * 0 
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  const n = nums.length;
  let sum = new Array(n+1).fill(0);
  for(let i = 1; i <= n; i++){
    sum[i] = sum[i - 1] + nums[i - 1];
  }
  const set = new Set();
  for(let i = 2; i<=n; i++){
    set.add(sum[i-2] % k);
    if(set.has(sum[i] % k)) return true;
  }
  return false;
};

var checkSubarraySum = function (nums, k) {
  const n = nums.length;
  let sum = new Array(n+1).fill(0);
  for(let i = 1; i <= n; i++){
    sum[i] = sum[i - 1] + nums[i - 1];
  }
  // const set = new Set();
  for(let i = 2; i<=n; i++){
    for(let j = i+2;j<=n; j++){
      if((sum[j] - sum[i]) % k === 0){
        return true;
      }
    }
  }
  return false;
};

// @lc code=end

