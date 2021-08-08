/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 *
 * https://leetcode-cn.com/problems/sum-of-square-numbers/description/
 *
 * algorithms
 * Medium (35.32%)
 * Likes:    197
 * Dislikes: 0
 * Total Accepted:    51.3K
 * Total Submissions: 139K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a^2 + b^2 = c 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：c = 5
 * 输出：true
 * 解释：1 * 1 + 2 * 2 = 5
 * 
 * 
 * 示例 2：
 * 
 * 输入：c = 3
 * 输出：false
 * 
 * 
 * 示例 3：
 * 
 * 输入：c = 4
 * 输出：true
 * 
 * 
 * 示例 4：
 * 
 * 输入：c = 2
 * 输出：true
 * 
 * 
 * 示例 5：
 * 
 * 输入：c = 1
 * 输出：true
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= c <= 2^31 - 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} c
 * @return {boolean}
 */
// 方法1： sqrt函数
/* var judgeSquareSum = function(c) {
  for(let a =0; a * a <=c; a++) {
    const b = Math.sqrt(c - a * a);
    if(b === parseInt(b)){
      return true;
    }
  }
  return false;
}; */

// 方法2：双指针
var judgeSquareSum = function(c) {
  let left = 0, right = parseInt(Math.sqrt(c));
  while(left <= right){
    let sum = left*left + right*right;
    if(sum === c) return true;
    else if(sum < c){
      left++;
    }else{
      right--
    }
  }
  return false;
};
// @lc code=end

