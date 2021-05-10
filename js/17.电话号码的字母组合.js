/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (56.28%)
 * Likes:    1243
 * Dislikes: 0
 * Total Accepted:    249.9K
 * Total Submissions: 443.3K
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 * 
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：digits = "23"
 * 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：digits = ""
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：digits = "2"
 * 输出：["a","b","c"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * digits[i] 是范围 ['2', '9'] 的一个数字。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length === 0) return [];
    const map = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    };
    const res = [];
    const backtracking =(str, index) => { //str是当前字符串， index是扫描的指针
        if(index === digits.length){
            res.push(str);
            return;
        }
        const letters = map[digits[index]]; // 选择当前数字对应的字母
        for(const letter of letters){
            backtracking(str+letter, i+1); //选择翻译letter ，生成新字符
        }
    }

    backtracking("", 0);
    return res;
    // const res = [];
    // const backtracking = (i, str) => {
    //     if (i === digits.length) {
    //         res.push(str);
    //         return;
    //     }

    //     for (const c of map[digits[i]]) {
    //         backtracking(i + 1, str + c);
    //     }
    // };
    // backtracking(0, '')
    // return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = letterCombinations;
// @after-stub-for-debug-end