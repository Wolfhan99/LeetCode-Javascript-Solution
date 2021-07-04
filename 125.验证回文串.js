/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 *
 * https://leetcode-cn.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (47.12%)
 * Likes:    383
 * Dislikes: 0
 * Total Accepted:    234.1K
 * Total Submissions: 496.2K
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * 
 * 示例 1:
 * 
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "race a car"
 * 输出: false
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toUpperCase();
  let i = 0, j = s.length - 1;
  while(i < j){
    if(!isValid(s[i])){
      i++;
      continue;
    }
    if(!isValid(s[j])){
      j--;
      continue;
    }
    if(s[i] !== s[j]){
      return false;
    }
    i++;
    j--;
  }
  return true;
};

var isValid = function(s) {
  return (s >= '0' && s <= '9') || (s >= 'a' && s <= 'z') || (s >= 'A' && s <= 'Z');
}
// @lc code=end

