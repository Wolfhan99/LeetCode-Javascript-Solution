/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // nums.sort((a, b) => a - b);
  let left = 0;
  for(let right = 0;right<nums.length;right++){
    if(nums[right]!==val){
      nums[left] = nums[right];
      left++;
    }
  }
  return left;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = removeElement;
// @after-stub-for-debug-end