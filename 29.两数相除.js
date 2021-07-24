/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 *
 * https://leetcode-cn.com/problems/divide-two-integers/description/
 *
 * algorithms
 * Medium (20.60%)
 * Likes:    612
 * Dislikes: 0
 * Total Accepted:    98.5K
 * Total Submissions: 477.6K
 * Testcase Example:  '10\n3'
 *
 * 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
 * 
 * 返回被除数 dividend 除以除数 divisor 得到的商。
 * 
 * 整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) =
 * -2
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: dividend = 10, divisor = 3
 * 输出: 3
 * 解释: 10/3 = truncate(3.33333..) = truncate(3) = 3
 * 
 * 示例 2:
 * 
 * 输入: dividend = 7, divisor = -3
 * 输出: -2
 * 解释: 7/-3 = truncate(-2.33333..) = -2
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 被除数和除数均为 32 位有符号整数。
 * 除数不为 0。
 * 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−2^31,  2^31 − 1]。本题中，如果除法结果溢出，则返回 2^31 − 1。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  var res=0
  var sign=dividend>0?divisor>0?'':'-':divisor>0?'-':''
  dividend=Math.abs(dividend)
  divisor=Math.abs(divisor)
  var strdiv=String(dividend)
  var quot='',remainder=''
  // 模拟除法算数思想，reminder为中间运算结果， temp为每一位运算结果 quot为除法结果
  for(var i=0;i<strdiv.length;i++){
      remainder+=strdiv[i]
      var temp=0
      var m=parseInt(remainder)
      while(divisor<=m){
          m=m-divisor
          temp++
      }
      quot+=temp
      remainder=String(m)
  }
  var res=parseInt(sign+quot)
  if(res>Math.pow(2,31)-1||res<Math.pow(-2,31))return Math.pow(2,31)-1
  return res


};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = divide;
// @after-stub-for-debug-end