/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
   const deque = []; // 存放单调队列的下标
   const res = [];
   for(let i=0;i<nums.length;i++){
       if(i-deque[0]>=k) {
           deque.shift(); // 在滑动窗口之外的值直接删除
       }
       while(nums[deque[deque.length-1]]<=nums[i]){
           deque.pop(); // 如果新加入的数比单调数列中的数都大，则弹出这些数
       }
       deque.push(i); //存入下标
       if(i>=k-1){
           res.push(nums[deque[0]])
       }
   }
   return res;
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = maxSlidingWindow;
// @after-stub-for-debug-end