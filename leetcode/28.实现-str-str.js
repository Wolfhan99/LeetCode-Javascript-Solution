/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var getNext = (next, s)=>{
    let j = -1;
    next[0] = j;
    for(let i = 1; i<s.length;i++){
        while(j >= 0 && s[i] != s[j+1]){
            j = next[j]; //向前回溯
        }
        if(s[i] == s[j+1]){
            j++;
        }
        next[i] = j; //将前缀的长度(j)赋值给next[i]
    }
}
var strStr = function(haystack, needle) {
    if(needle.length === 0) return 0;
    let next = new Array(needle.length);
    getNext(next, needle);
    let j = -1; //因为next数组中记录的起始位置为-1
    for(let i = 0; i<haystack.length;i++){
        while(j>=0 && haystack[i] !== needle[j+1]){  //不匹配的情况
            j = next[j]; // j寻找之前匹配的位置
        }
        if(haystack[i] == needle[j+1]){
            j++;
        }
        if(j === needle.length - 1){ //文本串里已经出现了模式串t
            return i - needle.length + 1;
        }
    }
    return -1;
};
// @lc code=end

