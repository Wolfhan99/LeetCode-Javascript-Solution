/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 *
 * https://leetcode-cn.com/problems/jump-game-ii/description/
 *
 * algorithms
 * Medium (38.53%)
 * Likes:    890
 * Dislikes: 0
 * Total Accepted:    113.9K
 * Total Submissions: 293K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 
 * 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
 * 
 * 示例:
 * 
 * 输入: [2,3,1,1,4]
 * 输出: 2
 * 解释: 跳到最后一个位置的最小跳跃数是 2。
 * 从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
 * 
 * 
 * 说明:
 * 
 * 假设你总是可以到达数组的最后一个位置。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let end = 0;
    let maxPosition = 0;
    let steps = 0;
    for(let i =0;i<nums.length-1;i++) {
        maxPosition = Math.max(maxPosition, i+nums[i]);
        if(i === end){
            end = maxPosition;
            steps++;
        }
    }
    return steps;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = jump;
// @after-stub-for-debug-end