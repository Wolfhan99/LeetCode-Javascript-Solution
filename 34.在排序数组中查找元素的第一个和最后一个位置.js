/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 *
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (42.52%)
 * Likes:    1102
 * Dislikes: 0
 * Total Accepted:    284K
 * Total Submissions: 667.8K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 * 
 * 进阶：
 * 
 * 
 * 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [5,7,7,8,8,10], target = 8
 * 输出：[3,4]
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [5,7,7,8,8,10], target = 6
 * 输出：[-1,-1]
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [], target = 0
 * 输出：[-1,-1]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * -10^9 
 * nums 是一个非递减数组
 * -10^9 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  // return [nums.indexOf(target), nums.lastIndexOf(target)]
  
  return [binarySearch(nums, target, true),binarySearch(nums, target, false)];
};

var binarySearch = (nums, target, leftOrRight) => {
  let res = -1;
  let left = 0, right = nums.length - 1;
  let mid = 0;
  while(left <= right){
    mid = left + right >> 1;
    if(target < nums[mid]){
      right = mid - 1;
    }else if(target > nums[mid]){
      left = mid + 1;
    }else{
      res = mid;
      // 处理target == nums[mid]
      if(leftOrRight){
        right = mid - 1;
      }else{
        left = mid + 1;
      }
    }
  }
  return res;
}
// @lc code=end

