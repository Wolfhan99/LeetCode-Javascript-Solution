/*
 * @lc app=leetcode.cn id=403 lang=javascript
 *
 * [403] 青蛙过河
 *
 * https://leetcode-cn.com/problems/frog-jump/description/
 *
 * algorithms
 * Hard (40.01%)
 * Likes:    225
 * Dislikes: 0
 * Total Accepted:    21.3K
 * Total Submissions: 50.3K
 * Testcase Example:  '[0,1,3,5,6,8,12,17]'
 *
 * 一只青蛙想要过河。 假定河流被等分为若干个单元格，并且在每一个单元格内都有可能放有一块石子（也有可能没有）。 青蛙可以跳上石子，但是不可以跳入水中。
 * 
 * 给你石子的位置列表 stones（用单元格序号 升序 表示）， 请判定青蛙能否成功过河（即能否在最后一步跳至最后一块石子上）。
 * 
 * 开始时， 青蛙默认已站在第一块石子上，并可以假定它第一步只能跳跃一个单位（即只能从单元格 1 跳至单元格 2 ）。
 * 
 * 如果青蛙上一步跳跃了 k 个单位，那么它接下来的跳跃距离只能选择为 k - 1、k 或 k + 1 个单位。
 * 另请注意，青蛙只能向前方（终点的方向）跳跃。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：stones = [0,1,3,5,6,8,12,17]
 * 输出：true
 * 解释：青蛙可以成功过河，按照如下方案跳跃：跳 1 个单位到第 2 块石子, 然后跳 2 个单位到第 3 块石子, 接着 跳 2 个单位到第 4 块石子,
 * 然后跳 3 个单位到第 6 块石子, 跳 4 个单位到第 7 块石子, 最后，跳 5 个单位到第 8 个石子（即最后一块石子）。
 * 
 * 示例 2：
 * 
 * 
 * 输入：stones = [0,1,2,3,4,8,9,11]
 * 输出：false
 * 解释：这是因为第 5 和第 6 个石子之间的间距太大，没有可选的方案供青蛙跳跃过去。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 2 
 * 0 
 * stones[0] == 0
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function (stones) {
  const set = new Set();
  return helper(stones, 0, 0, set);
};

const helper = function (stones, index, k, set) {
  /* 
    每次递归调用是在求一个子问题，用map记录遇到过的子问题，下次在遇到相同的子问题，就从map里取对应的计算结果
    其实，如果第二次遇到同一个子问题，说明第一次遇到它时，它返回的肯定是false,唯有这样，才会继续搜索别的分支，
    不然就直接向上返回true了，不可能在遇到别的重复的子问题

    所以遇到重复子问题，直接返回false
    
    当第一次遇到当前子问题，记录到map，用index和k构造一个唯一的key，代表一个子问题，value的值为true，
    代表遇到过
  
  */
  const key = index * 1000 + k;
  if (set.has(key)) {
    return false;
  } else {
    set.add(key);
  }

  for (let i = index + 1; i < stones.length; i++) {
    const gap = stones[i] - stones[index];
    if (gap >= k - 1 && gap <= k + 1) {
      if (helper(stones, i, gap, set)) {
        return true;
      }
    } else if (gap > k + 1) {
      break;
    }
  }
  return index === stones.length - 1;
}
// 题解：
// https://leetcode-cn.com/problems/frog-jump/solution/shou-hua-tu-jie-ji-hao-de-di-gui-ti-man-8kk2z/

/*
var canCross = function (stones) {
  const len = stones.length;
  // dp[i][j] 表示第i个石头是否可以跳j步
  const dp = new Array(len).fill(0)
    .map(() => new Array(len + 1).fill(false));
  dp[0][1] = true;

  for (let i = 1; i < len; i++) {
    let flag = false;
    // 因为石头i最大只能跳i+1步，所以前面的石头j到达的石头i的距离必须<=i
    for (let j = i - 1; j >= 0; j--) {
      let diff = stones[i] - stones[j];
      if (diff > i) break;
      // 对石头j，它需要跳diff步
      if (dp[j][diff] === true) {
        dp[i][diff - 1] = true;
        dp[i][diff] = true;
        dp[i][diff + 1] = true;
        flag = true;
      }
    }

    // 当到达终点且flag， 表示无法从前面的任意石头跳到终点，返回false；
    if(i === len -1 && !flag) {
      return false;
    }
  }
  return true;
}; */
// @lc code=end

