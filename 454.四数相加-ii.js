/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    const map = new Map();
    let ans = 0;
    for(var a of A){
        for(var b of B){
            map.set(-a-b, (map.get(-a-b)||0) + 1)
        }
    }

    for(var c of C){
        for(var d of D){
            map.has(c+d) && (ans+=map.get(c+d))
        }
    }
    return ans
};
// @lc code=end

