/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 *
 * https://leetcode-cn.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (66.20%)
 * Likes:    1075
 * Dislikes: 0
 * Total Accepted:    346.6K
 * Total Submissions: 522.9K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：[3,2,3]
 * 输出：3
 * 
 * 示例 2：
 * 
 * 
 * 输入：[2,2,1,1,1,2,2]
 * 输出：2
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // 第一反应哈希表
 /*  let map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for(const [key, value] of map.entries()){
    if(value > Math.floor(nums.length / 2)) return key;
  }
  return; */

  // 投票算法

  let count = 1;
  let majority = nums[0];
  for(let i = 1; i< nums.length;i++){
    if(count === 0){
      majority = nums[i];
    }
    if(nums[i] === majority) {
      count++;
    } else {
      count--;
    }
  }
  return majority;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = majorityElement;
// @after-stub-for-debug-end