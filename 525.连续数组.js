/*
 * @lc app=leetcode.cn id=525 lang=javascript
 *
 * [525] 连续数组
 *
 * https://leetcode-cn.com/problems/contiguous-array/description/
 *
 * algorithms
 * Medium (45.55%)
 * Likes:    366
 * Dislikes: 0
 * Total Accepted:    28.4K
 * Total Submissions: 54.6K
 * Testcase Example:  '[0,1]'
 *
 * 给定一个二进制数组 nums , 找到含有相同数量的 0 和 1 的最长连续子数组，并返回该子数组的长度。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: nums = [0,1]
 * 输出: 2
 * 说明: [0, 1] 是具有相同数量0和1的最长连续子数组。
 * 
 * 示例 2:
 * 
 * 
 * 输入: nums = [0,1,0]
 * 输出: 2
 * 说明: [0, 1] (或 [1, 0]) 是具有相同数量0和1的最长连续子数组。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * nums[i] 不是 0 就是 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let res = 0, sum = 0;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] === 0){
      nums[i] = -1;
    }
  }
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === 0 && i > res) {
      res = i + 1;
    }
    if (map.has(sum)) {
      res = Math.max(i - map.get(sum), res);
    } else {
      map.set(sum, i);
    }
  }
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findMaxLength;
// @after-stub-for-debug-end