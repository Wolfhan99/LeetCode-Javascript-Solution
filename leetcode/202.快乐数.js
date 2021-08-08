/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
   let slow = n,fast = getSum(n);
   while(slow!==fast){
       slow = getSum(slow);
       fast = getSum(getSum(fast));
   }
   return fast === 1
    

};
var getSum = (n) => {
    n = n + ''
    let sum = 0;
    for(let num of n){
        sum += num*num;
    }
    return sum;
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isHappy;
// @after-stub-for-debug-end