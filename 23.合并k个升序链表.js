/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 *
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (54.67%)
 * Likes:    1234
 * Dislikes: 0
 * Total Accepted:    234.4K
 * Total Submissions: 428.6K
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * 给你一个链表数组，每个链表都已经按升序排列。
 * 
 * 请你将所有链表合并到一个升序链表中，返回合并后的链表。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：lists = [[1,4,5],[1,3,4],[2,6]]
 * 输出：[1,1,2,3,4,4,5,6]
 * 解释：链表数组如下：
 * [
 * ⁠ 1->4->5,
 * ⁠ 1->3->4,
 * ⁠ 2->6
 * ]
 * 将它们合并到一个有序链表中得到。
 * 1->1->2->3->4->4->5->6
 * 
 * 
 * 示例 2：
 * 
 * 输入：lists = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 输入：lists = [[]]
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * k == lists.length
 * 0 <= k <= 10^4
 * 0 <= lists[i].length <= 500
 * -10^4 <= lists[i][j] <= 10^4
 * lists[i] 按 升序 排列
 * lists[i].length 的总和不超过 10^4
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {

  // 合并
  if (lists.length === 0) return null;
  while (lists.length > 1) {
    let a = lists.shift();
    let b = lists.shift();
    const c = mergeList(a, b);
    lists.push(c);
  }
  return lists[0];


};
const mergeList = (a, b) => {
  const dummy = new ListNode(0);
  let cur = dummy;
  while (a !== null && b !== null) {
    if (a.val < b.val) {
      cur.next = a;
      a = a.next;
    } else {
      cur.next = b;
      b = b.next;
    }
    cur = cur.next
  }
  if (a !== null) {
    cur.next = a;
  }
  if (b !== null) {
    cur.next = b;
  }
  return dummy.next;
  
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = mergeKLists;
// @after-stub-for-debug-end