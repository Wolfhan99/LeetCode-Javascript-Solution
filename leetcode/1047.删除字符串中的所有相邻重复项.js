/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    const stack = [];
    for(const ch of S){
        if(stack.length && stack[stack.length-1] === ch){
            stack.pop();
        }else{
            stack.push(ch)
        }
    }
    return stack.join("")

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = removeDuplicates;
// @after-stub-for-debug-end