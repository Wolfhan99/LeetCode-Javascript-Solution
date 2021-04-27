/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 *
 * https://leetcode-cn.com/problems/non-overlapping-intervals/description/
 *
 * algorithms
 * Medium (49.18%)
 * Likes:    387
 * Dislikes: 0
 * Total Accepted:    62.8K
 * Total Submissions: 127.8K
 * Testcase Example:  '[[1,2]]'
 *
 * 给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠。
 * 
 * 注意:
 * 
 * 
 * 可以认为区间的终点总是大于它的起点。
 * 区间 [1,2] 和 [2,3] 的边界相互“接触”，但没有相互重叠。
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: [ [1,2], [2,3], [3,4], [1,3] ]
 * 
 * 输出: 1
 * 
 * 解释: 移除 [1,3] 后，剩下的区间没有重叠。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [ [1,2], [1,2], [1,2] ]
 * 
 * 输出: 2
 * 
 * 解释: 你需要移除两个 [1,2] 来使剩下的区间没有重叠。
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: [ [1,2], [2,3] ]
 * 
 * 输出: 0
 * 
 * 解释: 你不需要移除任何区间，因为它们已经是无重叠的了。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    if (intervals.length === 0 || intervals.length === 1) return 0;
    intervals.sort((a, b) => a[1] - b[1]); // 右边界升序排列
    let pos = intervals[0][1]; // 记录第一个元素的右边界
    let ans = 1; // 记录非交叉空间的个数
    for (let i = 1; i < intervals.length; i++) {
        if (pos <= intervals[i][0]) {
            pos = intervals[i][1];
            ans++;
        }
    }

    return intervals.length - ans;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = eraseOverlapIntervals;
// @after-stub-for-debug-end