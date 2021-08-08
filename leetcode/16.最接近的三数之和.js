/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 *
 * https://leetcode-cn.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (45.97%)
 * Likes:    811
 * Dislikes: 0
 * Total Accepted:    228.9K
 * Total Submissions: 498.1K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target
 * 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：nums = [-1,2,1,-4], target = 1
 * 输出：2
 * 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 3 <= nums.length <= 10^3
 * -10^3 <= nums[i] <= 10^3
 * -10^4 <= target <= 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let closeSum = nums[0]+ nums[1] + nums[2];
  for(let i=0; i<nums.length; i++){
    let left = i+1, right = nums.length - 1;
    while(left < right){
      let sum = nums[i] + nums[left] + nums[right];
      if(Math.abs(sum-target) < Math.abs(closeSum-target)){
        closeSum = sum;
      }
      if(sum > target){
        right--;
      }else if(sum < target){
        left++;
      }else{
        return target;
      }
    }
  }
  return closeSum;
};

// @lc code=end

