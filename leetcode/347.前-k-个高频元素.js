/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = new Map(), arr = [...new Set(nums)];
    nums.map((num) => {
        map.set(num,(map.get(num) || 0) + 1);
    })
    return arr.sort((a,b) =>map.get(b)-map.get(a)).slice(0,k)

 
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = topKFrequent;
// @after-stub-for-debug-end