/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (65.80%)
 * Likes:    1668
 * Dislikes: 0
 * Total Accepted:    537.8K
 * Total Submissions: 817.4K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
 * 输出：[1,1,2,3,4,4]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：l1 = [], l2 = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：l1 = [], l2 = [0]
 * 输出：[0]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 两个链表的节点数目范围是 [0, 50]
 * -100 
 * l1 和 l2 均按 非递减顺序 排列
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
 * @param {ListNode} a
 * @param {ListNode} b
 * @return {ListNode}
 */
var mergeTwoLists = function(a, b) {
  let dummy = new ListNode(0);
  let cur = dummy;
  while(a !== null && b !== null){
    if(a.val < b.val){
      cur.next = a;
      cur = cur.next;
      a = a.next;
    }else{
      cur.next = b;
      cur = cur.next;
      b = b.next;
    }
  }
  if(a === null) cur.next = b;
  if(b === null) cur.next = a;
  return dummy.next;

};
// @lc code=end

