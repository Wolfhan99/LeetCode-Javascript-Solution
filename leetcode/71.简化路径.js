/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stk = [];
    const dir = path.split('/');   
    for(const subDir of dir) {
        if(subDir === '' || subDir === '.'){
            continue;
        }
        if(subDir === '..') {
            stk.length && stk.pop();
            continue;
        }
        stk.push(subDir);
    }
    return '/' + stk.join('/');
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = simplifyPath;
// @after-stub-for-debug-end