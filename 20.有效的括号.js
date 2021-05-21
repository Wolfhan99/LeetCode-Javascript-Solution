/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 !== 0) return false;
    const mappings = new Map();
    mappings.set('(', ')');
    mappings.set('[', ']');
    mappings.set('{', '}');
    const stack = []
    for (let i = 0; i < s.length; i++) {
        if(mappings.has(s[i])){
            stack.push(mappings.get(s[i]));
        }else{
            if(stack.pop() !== s[i]){
                return false;
            }
        }
    }
    return !stack.length;
    // if(stack.length === 0 ){
    //     return true;
    // }
    // return false;

};
// @lc code=end

