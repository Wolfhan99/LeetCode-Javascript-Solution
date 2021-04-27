/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 *
 * https://leetcode-cn.com/problems/combination-sum-iii/description/
 *
 * algorithms
 * Medium (73.89%)
 * Likes:    289
 * Dislikes: 0
 * Total Accepted:    72.5K
 * Total Submissions: 98.2K
 * Testcase Example:  '3\n7'
 *
 * 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
 * 
 * 说明：
 * 
 * 
 * 所有数字都是正整数。
 * 解集不能包含重复的组合。 
 * 
 * 
 * 示例 1:
 * 
 * 输入: k = 3, n = 7
 * 输出: [[1,2,4]]
 * 
 * 
 * 示例 2:
 * 
 * 输入: k = 3, n = 9
 * 输出: [[1,2,6], [1,3,5], [2,3,4]]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    // const path = [];
    const result = [];

    backtracking(n, k, 0, 1,[],result);
    return result;
};
// targetSum 目标和，也就是题目中的n
// k 题目中的k个数的集合
// sum 已经收集的元素的综合，也就是path里元素的综合
// startIndex 下一层for循环搜索的起始位置
var backtracking = (targetSum, k, sum, startIndex,path=[], result=[]) => {
    if (sum > targetSum) {
        return;
    }
    if (path.length === k) {
        if (sum === targetSum) result.push([...path]);
        return;
    }
    for (let i = startIndex; i <= 9; i++) {
        sum += i;
        path.push(i);
        backtracking(targetSum, k, sum, i + 1, path, result);
        sum -= i;
        path.pop();
    }
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = combinationSum3;
// @after-stub-for-debug-end