/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 *
 * https://leetcode-cn.com/problems/partition-equal-subset-sum/description/
 *
 * algorithms
 * Medium (49.75%)
 * Likes:    747
 * Dislikes: 0
 * Total Accepted:    117.9K
 * Total Submissions: 237K
 * Testcase Example:  '[1,5,11,5]'
 *
 * 给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
 * 
 * 注意:
 * 
 * 
 * 每个数组中的元素不会超过 100
 * 数组的大小不会超过 200
 * 
 * 
 * 示例 1:
 * 
 * 输入: [1, 5, 11, 5]
 * 
 * 输出: true
 * 
 * 解释: 数组可以分割成 [1, 5, 5] 和 [11].
 * 
 * 
 * 
 * 
 * 示例 2:
 * 
 * 输入: [1, 2, 3, 5]
 * 
 * 输出: false
 * 
 * 解释: 数组不能分割成两个元素和相等的子集.
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  /* 01背包注解：
  1.背包的体积为sum /2 
  2.背包要放入的商品（集合里的元素）重量为元素的数值，价值也为元素的数值
  3.背包如何正好装满，说明正好找到了总和为sum/2的子集
  4.背包中的每一个元素不可以重复放入
  */
  let sum = 0;
  let dp  = new Array(10001).fill(0);
  for (let num of nums) {
    sum += num;
  }
  if (sum % 2 == 1) return false;
  const target = sum / 2;

  // 开始01背包问题求解
  for (let i = 0; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
    }
  }
  // 集合中的元素正好可以装成target
  if(dp[target] == target) return true;
  return false;
};
// @lc code=end

