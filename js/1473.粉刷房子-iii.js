/*
 * @lc app=leetcode.cn id=1473 lang=javascript
 *
 * [1473] 粉刷房子 III
 *
 * https://leetcode-cn.com/problems/paint-house-iii/description/
 *
 * algorithms
 * Hard (68.01%)
 * Likes:    143
 * Dislikes: 0
 * Total Accepted:    14.2K
 * Total Submissions: 20.8K
 * Testcase Example:  '[0,0,0,0,0]\n[[1,10],[10,1],[10,1],[1,10],[5,1]]\n5\n2\n3'
 *
 * 在一个小城市里，有 m 个房子排成一排，你需要给每个房子涂上 n 种颜色之一（颜色编号为 1 到 n
 * ）。有的房子去年夏天已经涂过颜色了，所以这些房子不可以被重新涂色。
 * 
 * 我们将连续相同颜色尽可能多的房子称为一个街区。（比方说 houses = [1,2,2,3,3,2,1,1] ，它包含 5 个街区  [{1},
 * {2,2}, {3,3}, {2}, {1,1}] 。）
 * 
 * 给你一个数组 houses ，一个 m * n 的矩阵 cost 和一个整数 target ，其中：
 * 
 * 
 * houses[i]：是第 i 个房子的颜色，0 表示这个房子还没有被涂色。
 * cost[i][j]：是将第 i 个房子涂成颜色 j+1 的花费。
 * 
 * 
 * 请你返回房子涂色方案的最小总花费，使得每个房子都被涂色后，恰好组成 target 个街区。如果没有可用的涂色方案，请返回 -1 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：houses = [0,0,0,0,0], cost = [[1,10],[10,1],[10,1],[1,10],[5,1]], m = 5,
 * n = 2, target = 3
 * 输出：9
 * 解释：房子涂色方案为 [1,2,2,1,1]
 * 此方案包含 target = 3 个街区，分别是 [{1}, {2,2}, {1,1}]。
 * 涂色的总花费为 (1 + 1 + 1 + 1 + 5) = 9。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：houses = [0,2,1,2,0], cost = [[1,10],[10,1],[10,1],[1,10],[5,1]], m = 5,
 * n = 2, target = 3
 * 输出：11
 * 解释：有的房子已经被涂色了，在此基础上涂色方案为 [2,2,1,2,2]
 * 此方案包含 target = 3 个街区，分别是 [{2,2}, {1}, {2,2}]。
 * 给第一个和最后一个房子涂色的花费为 (10 + 1) = 11。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：houses = [0,0,0,0,0], cost = [[1,10],[10,1],[1,10],[10,1],[1,10]], m = 5,
 * n = 2, target = 5
 * 输出：5
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：houses = [3,1,2,3], cost = [[1,1,1],[1,1,1],[1,1,1],[1,1,1]], m = 4, n =
 * 3, target = 3
 * 输出：-1
 * 解释：房子已经被涂色并组成了 4 个街区，分别是 [{3},{1},{2},{3}] ，无法形成 target = 3 个街区。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == houses.length == cost.length
 * n == cost[i].length
 * 1 
 * 1 
 * 1 
 * 0 
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} houses
 * @param {number[][]} cost
 * @param {number} m
 * @param {number} n
 * @param {number} target
 * @return {number}
 */

 var minCost = function(houses, cost, m, n, target) {
  // 将颜色调整为从 0 开始编号，没有被涂色标记为 -1
  houses = houses.map(c => --c);
  const dp = new Array(m).fill(0)
                         .map(() => new Array(n).fill(0)
                         .map(() => new Array(target).fill(Number.MAX_VALUE)));
  
  // dp 所有元素初始化为极大值
  for (let i = 0; i < m; ++i) {
      for (let j = 0; j < n; ++j) {
          if (houses[i] !== -1 && houses[i] !== j) {
              continue;
          }
          
          for (let k = 0; k < target; ++k) {
              for (let j0 = 0; j0 < n; ++j0) {
                  if (j === j0) {
                      if (i === 0) {
                          if (k === 0) {
                              dp[i][j][k] = 0;
                          }
                      } else {
                          dp[i][j][k] = Math.min(dp[i][j][k], dp[i - 1][j][k]);
                      }
                  } else if (i > 0 && k > 0) {
                      dp[i][j][k] = Math.min(dp[i][j][k], dp[i - 1][j0][k - 1]);
                  }
              }

              if (dp[i][j][k] !== Number.MAX_VALUE && houses[i] === -1) {
                  dp[i][j][k] += cost[i][j];
              }
          }
      }
  }
  
  let ans = Number.MAX_VALUE;
  for (let j = 0; j < n; ++j) {
      ans = Math.min(ans, dp[m - 1][j][target - 1]);
  }
  return ans === Number.MAX_VALUE ? -1 : ans;
};




// var minCost = function (houses, cost, m, n, target) {
//   const max = Number.MAX_VALUE;
//   /* 
//   定义 dp[i][j][k] 为考虑前 i 间房子，且第 i 间房子的颜色编号为 j，
//   前 i 间房子形成的分区数量为 k 的所有方案中的「最小上色成本」
//  */
//   let dp = new Array(m + 1).fill(0).
//     map(() => new Array(n + 1).fill(0).
//       map(() => new Array(target + 1)));

//   for (let i = 0; i <= m; i++) {
//     for (let j = 0; j <= n; j++)
//       dp[i][j][0] = max;
//   }

//   for (let i = 1; i <= m; i++) {
//     let color = houses[i - 1];
//     for (let j = 1; j <= n; j++) {
//       for (let k = 1; k <= target; k++) {
//         // 形成分区数量大于房子数量，状态无效
//         if (k > i) {
//           dp[i][j][k] = max;
//           continue;
//         }

//         // 第i间房间已经上色
//         if (color !== 0) {
//           if (j === color) { // 只有与本来的颜色相同的状态才允许被转移
//             let tmp = max;
//             // 先从所有第i间房形成新分区方案中选优，与上一房间颜色不相同
//             for (let p = 1; p <= n; p++) {
//               if (p !== j) {
//                 tmp = Math.min(tmp, dp[i - 1][p][k - 1]);
//               }
//             }
//             // 再结合第i间房不形成新分区方案中选最优
//             dp[i][j][k] = Math.min(tmp, dp[i - 1][j][k]);
//           } else {
//             dp[i][j][k] = max;
//           }
//           // 第i间房还没有上色
//         } else {
//           let u = cost[i - 1][j - 1];
//           let tmp = max;
//           // 先从所有第i间房形成新分区方案中选优（即与上一房间颜色不同）
//           for (let p = 1; p <= n; p++) {
//             if (p !== j) {
//               tmp = Math.min(tmp, dp[i - 1][p][k - 1]);
//             }
//           }
//           // 再结合第i间房不形成新分区方案中选最优（即用户上一房间颜色相同）
//           // 添加上色成本
//           dp[i][j][k] = Math.min(tmp, dp[i - 1][j][k]) + u;
//         }
//       }
//     }
//   }
//   // 从考虑所有的房间，并且形成分区数量为target的方案中找答案；
//   let ans = max;
//   for(let i= 1; i <= n; i++){
//     ans = Math.min(ans, dp[m][i][target])
//   }
//   return ans === max ? -1 : ans;

// };
// @lc code=end

