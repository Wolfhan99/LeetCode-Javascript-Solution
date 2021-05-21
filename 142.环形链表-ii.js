/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function(head) {
    // hashMap
    // const visited = new Set();
    // while(head!==null){
    //     if(visited.has(head)){
    //         return head;
    //     }
    //     visited.add(head);
    //     head = head.next;
    // }
    // return null;
    let fast = head, slow = head; // 指定快慢指针
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            let index1 = fast;
            let index2 = head;
            while(index1 !== index2){
                index1 = index1.next;
                index2 = index2.next;
            }
            return index2;
        }
    }
    return null;
};
// @lc code=end

