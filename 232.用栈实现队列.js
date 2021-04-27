/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
    this.a = [];
    this.b = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.a.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.b.length === 0) {
        while (this.a.length !== 0) {
            this.b.push(this.a.pop())
        }
    }
    return this.b.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    // if (this.a.length === 0) {
    //     while (this.b.length !== 0) {
    //         this.a.push(this.b.pop());
    //     }
    //     return this.a[this.a.length - 1];
    // }
    if (this.b.length === 0) {
        while (this.a.length !== 0) {
            this.b.push(this.a.pop())
        }
    }
    return this.b[this.b.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return !this.a.length && !this.b.length
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

