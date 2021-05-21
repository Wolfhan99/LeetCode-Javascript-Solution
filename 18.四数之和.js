/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a,b)=>(a-b));
    let res = [];
    for(let i=0;i<nums.length;i++){
        if(i>0 && nums[i]==nums[i-1]) continue;
        for(let j=i+1;j<nums.length;j++){
            if(j>i+1 && nums[j]==nums[j-1]) continue;
            let left = j+1, right = nums.length-1;
        while(right>left){
            if(nums[i]+nums[j]+nums[left]+nums[right]==target){
                res.push([nums[i],nums[j],nums[left],nums[right]])
                while(right > left && nums[right] == nums[right-1]) right--;
                while(right > left && nums[left] == nums[left+1]) left++;
                left++;right++;
            }else if(nums[i]+nums[j]+nums[left]+nums[right] < target){
                left++;
            }else{
                right--;
            }
        }
        
        
    }}
    return res;
};
// @lc code=end

