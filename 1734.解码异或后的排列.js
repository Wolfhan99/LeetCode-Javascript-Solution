/*
 * @lc app=leetcode.cn id=1734 lang=javascript
 *
 * [1734] 解码异或后的排列
 *
 * https://leetcode-cn.com/problems/decode-xored-permutation/description/
 *
 * algorithms
 * Medium (44.82%)
 * Likes:    53
 * Dislikes: 0
 * Total Accepted:    7.8K
 * Total Submissions: 11.8K
 * Testcase Example:  '[3,1]'
 *
 * 给你一个整数数组 perm ，它是前 n 个正整数的排列，且 n 是个 奇数 。
 * 
 * 它被加密成另一个长度为 n - 1 的整数数组 encoded ，满足 encoded[i] = perm[i] XOR perm[i + 1]
 * 。比方说，如果 perm = [1,3,2] ，那么 encoded = [2,1] 。
 * 
 * 给你 encoded 数组，请你返回原始数组 perm 。题目保证答案存在且唯一。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：encoded = [3,1]
 * 输出：[1,2,3]
 * 解释：如果 perm = [1,2,3] ，那么 encoded = [1 XOR 2,2 XOR 3] = [3,1]
 * 
 * 
 * 示例 2：
 * 
 * 输入：encoded = [6,5,4,6]
 * 输出：[2,4,1,5,3]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 3 <= n < 10^5
 * n 是奇数。
 * encoded.length == n - 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} encoded
 * @return {number[]}
 */
var decode = function (encoded) {
  const n = encoded.length; // 编码后的长度
  const perm = new Array(n + 1).fill(0); // 定义原始数组
  let ABCDE = 0; // 初始化，这个变量存放perm中所有数据进行异或的结果
  for (let i = 1; i <= n + 1; i++) {  // perm中所有数值进行异或
    ABCDE ^= i;
  }
  let BCDE = 0; // 为了得到perm的第一个数值，初始化一个变量
  for (let i = 1; i < n; i += 2) {
    BCDE ^= encoded[i];
  }

  perm[0] = ABCDE ^ BCDE; // 得到原始数组第一个变量，此时可按照leet.1720计算

  for (let i = 1; i <= n; i++) {
    perm[i] = perm[i - 1] ^ encoded[i - 1];
  }
  return perm;
};
// @lc code=end

