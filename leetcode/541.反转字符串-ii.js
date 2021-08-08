/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let res = ''
    for(let i=0;i<s.length;i+=(2*k)){
           let subS = s.slice(i,i+k);
           
            //    let suuu = subS.split('')
            //    let suuuu = subS.split('').reverse()
               subS = subS.split('').reverse().join('')

           
           // subS = s.slice(i,i+k).split('').reverse().join('');
           res += subS;
       }
   
   return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverseStr;
// @after-stub-for-debug-end