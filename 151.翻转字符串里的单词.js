/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let newStr = s.split(" ");
    let res = []
    for(element of newStr){
        if(element !== ''){
            res.push(element);
        }
    }
    res = res.reverse().join(' ')
    return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverseWords;
// @after-stub-for-debug-end