/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    let Str = s + s;
    return Str.substring(1,Str.length-1).includes(s);

}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = repeatedSubstringPattern;
// @after-stub-for-debug-end