/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 *
 * https://leetcode-cn.com/problems/subsets/description/
 *
 * algorithms
 * Medium (79.58%)
 * Likes:    1134
 * Dislikes: 0
 * Total Accepted:    232.5K
 * Total Submissions: 291.2K
 * Testcase Example:  '[1,2,3]'
 *
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 * 
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0]
 * 输出：[[],[0]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10 
 * nums 中的所有元素 互不相同
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = [];
  const dfs = (startIndex, path) => {
    res.push(path.slice()); // 收集子集，要放在终止添加的上面，否则会漏掉
    if(startIndex >= nums.length){
      return;
    }
    for(let i = startIndex;i<nums.length;i++){
      path.push(nums[i]);
      dfs(i+1,path);
      path.pop();
    }
  }
  dfs(0, []);
  return res;
};
// @lc code=end

