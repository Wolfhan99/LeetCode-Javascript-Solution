/*
 * @lc app=leetcode.cn id=738 lang=javascript
 *
 * [738] 单调递增的数字
 *
 * https://leetcode-cn.com/problems/monotone-increasing-digits/description/
 *
 * algorithms
 * Medium (50.19%)
 * Likes:    174
 * Dislikes: 0
 * Total Accepted:    34.8K
 * Total Submissions: 69.4K
 * Testcase Example:  '10'
 *
 * 给定一个非负整数 N，找出小于或等于 N 的最大的整数，同时这个整数需要满足其各个位数上的数字是单调递增。
 * 
 * （当且仅当每个相邻位数上的数字 x 和 y 满足 x <= y 时，我们称这个整数是单调递增的。）
 * 
 * 示例 1:
 * 
 * 输入: N = 10
 * 输出: 9
 * 
 * 
 * 示例 2:
 * 
 * 输入: N = 1234
 * 输出: 1234
 * 
 * 
 * 示例 3:
 * 
 * 输入: N = 332
 * 输出: 299
 * 
 * 
 * 说明: N 是在 [0, 10^9] 范围内的一个整数。
 * 
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function (N) {
    const strNum = N.toString().split('').map(v => +v);
    // flag用来标记幅值9从哪里开始
    // 设置这个默认值，为了防止第二个for循环在flag没有被幅值的情况下执行
    let flag = strNum.length;
    for (let i = strNum.length - 1; i > 0; i--) {
        if (strNum[i - 1] > strNum[i]) {
            flag = i;
            strNum[i - 1]--;
            // strNum[i] = 9;
        }
    }
    for(let i = flag; i<strNum.length; i++){
        strNum[i] = 9;
    }
    return parseInt(strNum.join(''));
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = monotoneIncreasingDigits;
// @after-stub-for-debug-end