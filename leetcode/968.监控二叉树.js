/*
 * @lc app=leetcode.cn id=968 lang=javascript
 *
 * [968] 监控二叉树
 *
 * https://leetcode-cn.com/problems/binary-tree-cameras/description/
 *
 * algorithms
 * Hard (48.92%)
 * Likes:    273
 * Dislikes: 0
 * Total Accepted:    20.2K
 * Total Submissions: 41.2K
 * Testcase Example:  '[0,0,null,0,0]'
 *
 * 给定一个二叉树，我们在树的节点上安装摄像头。
 * 
 * 节点上的每个摄影头都可以监视其父对象、自身及其直接子对象。
 * 
 * 计算监控树的所有节点所需的最小摄像头数量。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 输入：[0,0,null,0,0]
 * 输出：1
 * 解释：如图所示，一台摄像头足以监控所有节点。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 输入：[0,0,null,0,null,0,null,null,0]
 * 输出：2
 * 解释：需要至少两个摄像头来监视树的所有节点。 上图显示了摄像头放置的有效位置之一。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 给定树的节点数的范围是 [1, 1000]。
 * 每个节点的值都是 0。
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minCameraCover = function (root) {
    let result = 0;
      // 0表示该节点无覆盖， 1表示该节点有摄像头， 2表示该节点有覆盖
    var traversal = function (cur) {
        // 空节点，该节点有覆盖
        if (!cur) return 2;
        let left = traversal(cur.left);
        let right = traversal(cur.right);

        //情况1 ：左右绩点都有覆盖
        if (left === 2 && right === 2) return 0;

        //情况2： 
        // left == 0 && right == 0 左右节点无覆盖
        // left == 1 && right == 0 左节点有摄像头，右节点无覆盖
        // left == 0 && right == 1 左节点无覆盖，右节点摄像头
        // left == 0 && right == 2 左节点无覆盖，右节点覆盖
        // left == 2 && right == 0 左节点覆盖，右节点
        if (left === 0 || right === 0) {
            result++;
            return 1;
        }

        if (left === 1 || right === 1){
            return 2;
        }
    }

    // main function 
    if(traversal(root) === 0) { // root无覆盖
        result++;
    }
    return result;



  
   


};

// @lc code=end

