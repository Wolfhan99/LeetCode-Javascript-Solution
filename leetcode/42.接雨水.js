/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 *
 * https://leetcode-cn.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (56.98%)
 * Likes:    2562
 * Dislikes: 0
 * Total Accepted:    292.7K
 * Total Submissions: 513.2K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
 *
 *
 * 示例 2：
 *
 *
 * 输入：height = [4,2,0,3,2,5]
 * 输出：9
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == height.length
 * 0
 * 0
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // 第一种做法:遍历左右两边的最高高度
  /* 

  const n = height.length;
  let sum = 0;
  // 两边的柱子一定不可能积水,因此范围是[1, n-1]
  for(let i = 1; i < n - 1; i++) {

    let leftMax = 0;
    for(let j = i - 1; j >= 0; j--){
      leftMax = Math.max(leftMax, height[j]);
    }

    let rightMax = 0;
    for(let j = i + 1; j < n; j++){
      rightMax = Math.max(rightMax, height[j]);
    }
    
    let min = Math.min(leftMax, rightMax);
    if(min > height[i]){
      sum += min - height[i];
    }
  }
  return sum; 
  
  */

  // 动态规划
  const n = height.length;
  let sum = 0;
  // 初始化两个dp数组,用来保存当前位置左右两边的最大高度
  let leftMax = new Array(n).fill(0);
  let rightMax = new Array(n).fill(0);

  for (let i = 1; i < n - 1; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i - 1]);
  }

  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i + 1]);
  }

  for(let i = 1; i < n - 1; i++) {
    let min = Math.min(leftMax[i], rightMax[i]);
    if(min > height[i]){
      sum += min - height[i];
    }
  }
  return sum;
};
// @lc code=end
