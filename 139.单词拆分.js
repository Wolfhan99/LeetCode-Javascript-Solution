/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 *
 * https://leetcode-cn.com/problems/word-break/description/
 *
 * algorithms
 * Medium (49.77%)
 * Likes:    949
 * Dislikes: 0
 * Total Accepted:    137.5K
 * Total Submissions: 276K
 * Testcase Example:  '"leetcode"\n["leet","code"]'
 *
 * 给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。
 * 
 * 说明：
 * 
 * 
 * 拆分时可以重复使用字典中的单词。
 * 你可以假设字典中没有重复的单词。
 * 
 * 
 * 示例 1：
 * 
 * 输入: s = "leetcode", wordDict = ["leet", "code"]
 * 输出: true
 * 解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
 * 
 * 
 * 示例 2：
 * 
 * 输入: s = "applepenapple", wordDict = ["apple", "pen"]
 * 输出: true
 * 解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
 * 注意你可以重复使用字典中的单词。
 * 
 * 
 * 示例 3：
 * 
 * 输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
 * 输出: false
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const wordSet = new Set(wordDict);
  // dp[i] :dp[i]=True时，表示组成长度为i的字符串可以拆分成一个或多个出现在字典中的单词
  let dp = new Array(s.length+1).fill(false);
  dp[0] = true;
  for(let i = 1; i<=s.length; i++){
    for(let j = 0; j<i; j++){
      let word = s.substring(j,i);
      if(wordSet.has(word) && dp[j] === true){
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = wordBreak;
// @after-stub-for-debug-end