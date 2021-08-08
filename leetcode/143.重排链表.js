/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 *
 * https://leetcode-cn.com/problems/reorder-list/description/
 *
 * algorithms
 * Medium (60.05%)
 * Likes:    572
 * Dislikes: 0
 * Total Accepted:    92.7K
 * Total Submissions: 154K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
 * 将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…
 * 
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 示例 1:
 * 
 * 给定链表 1->2->3->4, 重新排列为 1->4->2->3.
 * 
 * 示例 2:
 * 
 * 给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.
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
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  // let n = 0;
  // let fakeHead = head;
  // while (fakeHead !== null) {
  //   fakeHead = fakeHead.next;
  //   n++;
  // }
  // if (n > 1) {
  //   let mid = Math.floor(n/2);
  //   let cur = head, small = head;
  //   while (mid > 0) {
  //     cur = cur.next;
  //     mid--;
  //   }
  if (head === null) return;
  let mid = findMiddleNode(head);
  let small = head;
  let large = mid.next;
  mid.next = null;
  // 反转链表
  large = reverseList(large);
  mergeList(small, large);
};

const reverseList = function (head) {
  let pre = null;
  let cur = head;
  while (cur !== null) {
    let tmp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = tmp;
  }
  return pre;
}
const findMiddleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast.next !== null && fast.next.next !== null) {
    // while (fast.next !== null && fast !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
const mergeList = function (small, large) {
  let temp1 = null, temp2 = null;
  while (small !== null && large !== null) {
    temp1 = small.next;
    small.next = large;
    small = temp1;
    temp2 = large.next;
    large.next = small;
    large = temp2;
  }

}
// @lc code=end

