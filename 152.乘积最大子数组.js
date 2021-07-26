/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 *
 * https://leetcode-cn.com/problems/maximum-product-subarray/description/
 *
 * algorithms
 * Medium (41.67%)
 * Likes:    1198
 * Dislikes: 0
 * Total Accepted:    160K
 * Total Submissions: 382.6K
 * Testcase Example:  '[2,3,-2,4]'
 *
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: [2,3,-2,4]
 * 输出: 6
 * 解释: 子数组 [2,3] 有最大乘积 6。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [-2,0,-1]
 * 输出: 0
 * 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let a = 1;
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    a = a * nums[i];
    max = Math.max(max, a);
    if(nums[i] === 0) a = 1;
  }
  // 重置临时变量a为1,从后向前遍历
  a = 1;
  for(let i = nums.length - 1; i>=0; i--){
    a = a * nums[i];
    max = Math.max(max, a);
    if(nums[i] === 0) a = 1;
  }
  return max;
};
// @lc code=end

