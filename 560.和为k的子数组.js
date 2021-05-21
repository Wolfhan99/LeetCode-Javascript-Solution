/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 *
 * https://leetcode-cn.com/problems/subarray-sum-equals-k/description/
 *
 * algorithms
 * Medium (44.50%)
 * Likes:    891
 * Dislikes: 0
 * Total Accepted:    108.3K
 * Total Submissions: 243.4K
 * Testcase Example:  '[1,1,1]\n2'
 *
 * 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。
 * 
 * 示例 1 :
 * 
 * 
 * 输入:nums = [1,1,1], k = 2
 * 输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
 * 
 * 
 * 说明 :
 * 
 * 
 * 数组的长度为 [1, 20,000]。
 * 数组中元素的范围是 [-1000, 1000] ，且整数 k 的范围是 [-1e7, 1e7]。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  // nums.sort((a, b) => a - b);
  let count = 0; // 记录和为k的连续的子数组的个数
  let prefixSum = 0; // 前缀和
  let map = new Map();
  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    if (map.has(prefixSum - k)) {
      count += map.get(prefixSum - k);
    }
    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    
  }
  return count;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = subarraySum;
// @after-stub-for-debug-end