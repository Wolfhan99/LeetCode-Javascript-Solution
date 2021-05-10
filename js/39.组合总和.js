/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 *
 * https://leetcode-cn.com/problems/combination-sum/description/
 *
 * algorithms
 * Medium (72.17%)
 * Likes:    1284
 * Dislikes: 0
 * Total Accepted:    237.7K
 * Total Submissions: 329K
 * Testcase Example:  '[2,3,6,7]\n7'
 *
 * 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * 
 * candidates 中的数字可以无限制重复被选取。
 * 
 * 说明：
 * 
 * 
 * 所有数字（包括 target）都是正整数。
 * 解集不能包含重复的组合。 
 * 
 * 
 * 示例 1：
 * 
 * 输入：candidates = [2,3,6,7], target = 7,
 * 所求解集为：
 * [
 * ⁠ [7],
 * ⁠ [2,2,3]
 * ]
 * 
 * 
 * 示例 2：
 * 
 * 输入：candidates = [2,3,5], target = 8,
 * 所求解集为：
 * [
 * [2,2,2,2],
 * [2,3,3],
 * [3,5]
 * ]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= candidates.length <= 30
 * 1 <= candidates[i] <= 200
 * candidate 中的每个元素都是独一无二的。
 * 1 <= target <= 500
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const res = [];
    const path = [];
    const backtracking = (candidates, target, sum, startIndex) => {
        if (sum > target) {
            return;
        }
        if (sum === target) {
            res.push(path.slice());
            return
        }
        for (let i = startIndex; i < candidates.length && sum + candidates[i] <= target; i++) {
            sum += candidates[i];
            path.push(candidates[i]);
            backtracking(candidates, target, sum, i); // 关键点，不用i+1了，表示可以重复读取
            sum -= candidates[i];
            path.pop();
        }
    }
    candidates.sort((a, b) => a - b)
    backtracking(candidates, target, 0, 0);
    return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = combinationSum;
// @after-stub-for-debug-end