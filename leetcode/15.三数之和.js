/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    const res = []
    for (let i = 0; i < nums.length; i++) {
        let target = 0 - nums[i],
            left = i + 1,
            right = nums.length - 1;
        if (nums[i] > 0) break;
        if (i == 0 || nums[i] !== nums[i - 1]) {
            while (left < right) {
                if (nums[left] + nums[right] === target) {
                    res.push([nums[i], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                }
                else if (nums[left] + nums[right] < target) {
                    left++;}
                else {
                    right--;}
            }
        }

    }
    return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = threeSum;
// @after-stub-for-debug-end