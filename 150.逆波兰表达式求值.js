/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const op = ['+', '-', '*', '/'];
    const stack = []
    for (let i = 0; i < tokens.length; i++){
        if(op.includes(tokens[i])){
            let nums1 = stack.pop();
            let nums2 = stack.pop()
            if(tokens[i] === op[0]) stack.push(nums1 + nums2);
            if(tokens[i] === op[1]) stack.push(nums2 - nums1);
            if(tokens[i] === op[2]) stack.push(nums1 * nums2);
            if(tokens[i] === op[3]) stack.push(parseInt(nums2 / nums1));
        }else{
            stack.push(parseInt(tokens[i])); //这里是字符型的数字，需要转换为数字类型,否则就是字符串相加
        }
        
        
    }
    return stack.pop();
    
    
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = evalRPN;
// @after-stub-for-debug-end