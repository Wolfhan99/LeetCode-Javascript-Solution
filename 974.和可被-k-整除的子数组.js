/*
 * @lc app=leetcode.cn id=974 lang=javascript
 *
 * [974] 和可被 K 整除的子数组
 *
 * https://leetcode-cn.com/problems/subarray-sums-divisible-by-k/description/
 *
 * algorithms
 * Medium (46.09%)
 * Likes:    273
 * Dislikes: 0
 * Total Accepted:    32.6K
 * Total Submissions: 70.3K
 * Testcase Example:  '[4,5,0,-2,-3,1]\n5'
 *
 * 给定一个整数数组 A，返回其中元素之和可被 K 整除的（连续、非空）子数组的数目。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：A = [4,5,0,-2,-3,1], K = 5
 * 输出：7
 * 解释：
 * 有 7 个子数组满足其元素之和可被 K = 5 整除：
 * [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2,
 * -3]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= A.length <= 30000
 * -10000 <= A[i] <= 10000
 * 2 <= K <= 10000
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  let sum = 0;
  let preSumModK = 0;
  let count = 0;
  // 预置preSum[-1]=0
  // 遍历数组nums之前，mao提前放入0：1键值对，代表求第0项前缀和之前
  // 前缀和 mod K等于0出现了1次
  const map = { 0: 1 };
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    preSumModK = sum % k; // 递推式子
    // 考虑前缀和为负数的情况，
    /* 
    举例 K = 4，求出某个前缀和为 -1，-1 % K 应该为 3，
    但有的语言中：-1 % K = -1。所以，这个 -1，要加上 K，转成正数的 3。
    其实，-1 和 3 分别模 4 的结果看似不相等，
    但前缀和之差：3-(-1) 为 4。4 % K = 0，
    所形成的子数组满足元素和被 4 整除。
    所以前缀和 -1 和 3 其实是等价的。
    */
    if (preSumModK < 0) {
      preSumModK += k;
    }
    if (map[preSumModK]) {      // 已经存在于map
      count += map[preSumModK]; // 把对应的次数累加给count
      map[preSumModK]++;        // 并且更新出现次数，次数+1
    } else {
      map[preSumModK] = 1;      // 之前没出现过，初始化值为1
    }
  }
  return count;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = subarraysDivByK;
// @after-stub-for-debug-end