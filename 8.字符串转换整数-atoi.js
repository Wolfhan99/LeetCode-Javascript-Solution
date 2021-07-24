/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  var number = parseInt(s, 10);
  if (isNaN(number)) {
    return 0;
  } else if (number < -Math.pow(2, 31) || number > Math.pow(2, 31) - 1){
    return number < -Math.pow(2, 31) ? -Math.pow(2,31) : Math.pow(2, 31) - 1;
  }else{
    return number;
  }
};
// @lc code=end

