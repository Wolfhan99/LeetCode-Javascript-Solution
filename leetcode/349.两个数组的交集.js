/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1),
        set2 = new Set(nums2);
    let intersection = new Set([...set1].filter(x=>set2.has(x)))
    return Array.from(intersection);
};
// @lc code=end

