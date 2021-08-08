/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // const hash = new Set();
    // while(head){
    //     if(hash.has(head)) return true;
    //     hash.add(head);
    //     head = head.next;
    // }
    // return false
    /* 双指针 （我们好像环形列表中的双指针）*/
    let fast = head, slow = head;
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
        if(slow === fast) return true;
    }
    return false;
};
// @lc code=end

