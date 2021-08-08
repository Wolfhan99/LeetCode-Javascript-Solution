/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false;
    const record = new Array(26).fill(0);
    for (var char of magazine) {
        record[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for (var char of ransomNote) {
        record[char.charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }
    for (const num of record) {
        if (num < 0) return false;
    }
    return true;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = canConstruct;
// @after-stub-for-debug-end