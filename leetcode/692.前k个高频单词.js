/*
 * @lc app=leetcode.cn id=692 lang=javascript
 *
 * [692] 前K个高频单词
 *
 * https://leetcode-cn.com/problems/top-k-frequent-words/description/
 *
 * algorithms
 * Medium (52.16%)
 * Likes:    273
 * Dislikes: 0
 * Total Accepted:    38K
 * Total Submissions: 68.8K
 * Testcase Example:  '["i", "love", "leetcode", "i", "love", "coding"]\n2'
 *
 * 给一非空的单词列表，返回前 k 个出现次数最多的单词。
 * 
 * 返回的答案应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率，按字母顺序排序。
 * 
 * 示例 1：
 * 
 * 
 * 输入: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
 * 输出: ["i", "love"]
 * 解析: "i" 和 "love" 为出现次数最多的两个单词，均为2次。
 * ⁠   注意，按字母顺序 "i" 在 "love" 之前。
 * 
 * 
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
 * k = 4
 * 输出: ["the", "is", "sunny", "day"]
 * 解析: "the", "is", "sunny" 和 "day" 是出现次数最多的四个单词，
 * ⁠   出现次数依次为 4, 3, 2 和 1 次。
 * 
 * 
 * 
 * 
 * 注意：
 * 
 * 
 * 假定 k 总为有效值， 1 ≤ k ≤ 集合元素数。
 * 输入的单词均由小写字母组成。
 * 
 * 
 * 
 * 
 * 扩展练习：
 * 
 * 
 * 尝试以 O(n log k) 时间复杂度和 O(n) 空间复杂度解决。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  // 方法一：利用map记录
  // const map = new Map();
  // for (const word of words) {
  //   map.set(word, (map.get(word) || 0) + 1);
  // }
  // // localeCompare 按字母大小排序
  // let ans = [...map].sort((a, b) =>b[1]-a[1] || a[0].localeCompare(b[0])).
  //           map(item => item[0]);
  // return ans.slice(0, k);
  // 方法二：利用object记录
  
  //  let hash = {};
  //    for (let word of words) {
  //        hash[word] = hash[word]+1||1;
  //    }
  //    let result = Object.keys(hash).sort((a,b)=>{
  //            let countCompare = hash[b] - hash[a];
  //            if (countCompare == 0) return a.localeCompare(b);
  //            else return countCompare;
  //        }   
  //    );
  //    return result.slice(0, k);
  const map = new Map();
  for(const word of words){
      map.set(word, (map.get(word) || 0) + 1);
  }
  let res = []
  for(const key of map.keys()){
      res.push(key)
  }
  console.log(res)
  res = res.sort((word1,word2) => 
                  map.get(word1) === map.get(word2)
                  ? word1.localeCompare(word2) 
                  : map.get(word1) - map.get(word2))
  return res.splice(0,k)
     
    
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = topKFrequent;
// @after-stub-for-debug-end