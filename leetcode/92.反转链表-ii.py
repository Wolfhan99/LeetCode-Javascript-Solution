#
# @lc app=leetcode.cn id=92 lang=python3
#
# [92] 反转链表 II
#
# https://leetcode-cn.com/problems/reverse-linked-list-ii/description/
#
# algorithms
# Medium (54.60%)
# Likes:    989
# Dislikes: 0
# Total Accepted:    196.7K
# Total Submissions: 359.9K
# Testcase Example:  '[1,2,3,4,5]\n2\n4'
#
# 给你单链表的头指针 head 和两个整数 left 和 rightNode ，其中 left  。请你反转从位置 left 到位置 rightNode 的链表节点，返回
# 反转后的链表 。
# 
# 
# 示例 1：
# 
# 
# 输入：head = [1,2,3,4,5], left = 2, rightNode = 4
# 输出：[1,4,3,2,5]
# 
# 
# 示例 2：
# 
# 
# 输入：head = [5], left = 1, rightNode = 1
# 输出：[5]
# 
# 
# 
# 
# 提示：
# 
# 
# 链表中节点数目为 n
# 1 
# -500 
# 1 
# 
# 
# 
# 
# 进阶： 你可以使用一趟扫描完成反转吗？
# 
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: ListNode, left: int, right: int) -> ListNode:
        def reverseLinkedList(head):
            pre = None
            cur = head
            while cur:
                next = cur.next
                cur.next = pre
                pre = cur
                cur = next
        
        # 因为头结点有坑呢发生变化，使用dummy节点
        dummy = ListNode(-1)
        dummy.next = head
        pre = dummy
        # 从dummy节点走left - 1步， 来到left节点的前一个节点
        for _ in range(left - 1):
            pre = pre.next
        
        # 从pre再走rightNode - left + 1步，来到rightNode节点
        rightNode = pre
        for _ in range(right - left + 1):
            rightNode = rightNode.next
        # 切断一个子链表
        leftNode = pre.next
        cur = rightNode.next

        # 切断连接
        pre.next = None
        rightNode.next = None

        reverseLinkedList(leftNode)

        pre.next = rightNode
        leftNode.next = cur

        return dummy.next

# @lc code=end

