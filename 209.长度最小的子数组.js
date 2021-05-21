/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let result = Number.MAX_SAFE_INTEGER;
    let j = 0, subLength = 0;
    let sum = 0;
    for(let i =0;i<nums.length;i++){
        sum+=nums[i];

        while(sum >= target){
            subLength = i - j + 1;
            result = Math.min(result,subLength);
            sum -= nums[j++];
        }
    }
    return result === Number.MAX_SAFE_INTEGER ? 0 : result;
};
// @lc code=end

