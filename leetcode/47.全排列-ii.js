/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 *
 * https://leetcode-cn.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (63.52%)
 * Likes:    773
 * Dislikes: 0
 * Total Accepted:    197.3K
 * Total Submissions: 310.3K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,1,2]
 * 输出：
 * [[1,1,2],
 * ⁠[1,2,1],
 * ⁠[2,1,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * -10
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const len = nums.length;
  let used = new Array(len).fill(false);
  let res = [];
  if (len === 0) return res;
  nums.sort((a, b) => a - b);
  dfs(nums, len, 0, [], used, res);
  return res;
};
const dfs = (nums, len, depth, path, used, res) => {
  if (depth === len) {
    res.push(path.slice());
    return;
  }

  for (let i = 0; i < len; i++) {
    if (used[i]) {
      continue;
    }
     // 剪枝条件：i > 0 是为了保证 nums[i - 1] 有意义
    // 写 !used[i - 1] 是因为 nums[i - 1] 在深度优先遍历的过程中刚刚被撤销选择
    // 重点就是剪枝：如果这个数和之前的数一样，并且之前的数还未使用过（说明已经回溯过）

    if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
      continue;
    }
    path.push(nums[i]);
    used[i] = true;
    dfs(nums, len, depth + 1, path, used, res);
    used[i] = false;
    path.pop();
  }
};
// @lc code=end
