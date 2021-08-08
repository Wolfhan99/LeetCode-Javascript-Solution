/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 *
 * https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/description/
 *
 * algorithms
 * Medium (76.25%)
 * Likes:    512
 * Dislikes: 0
 * Total Accepted:    78.6K
 * Total Submissions: 103.1K
 * Testcase Example:  '[-10,-3,0,5,9]'
 *
 * 给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。
 * 
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 * 
 * 示例:
 * 
 * 给定的有序链表： [-10, -3, 0, 5, 9],
 * 
 * 一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：
 * 
 * ⁠     0
 * ⁠    / \
 * ⁠  -3   9
 * ⁠  /   /
 * ⁠-10  5
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {

  // 快慢指针找到链表中点,中点作为根节点,两边作为左右子树
  if (head == null) return null;
  if (head.next === null) return new TreeNode(head.val);
  // 快慢指针找中间节点
  let fast = head, slow = head, pre = null;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    pre = slow;
    slow = slow.next;
  }
  // 分割左链表,用于构造左子树
  pre.next = null;
  // 分割右链表,用于构造右子树
  let rightList = slow.next;
  // 中间节点作为根节点
  let root = new TreeNode(slow.val);
  //递归构造左右子树
  root.left = sortedListToBST(head);
  root.right = sortedListToBST(rightList);

  return root;


}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = sortedListToBST;
// @after-stub-for-debug-end