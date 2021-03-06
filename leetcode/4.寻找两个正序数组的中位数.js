/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 *
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (40.57%)
 * Likes:    4323
 * Dislikes: 0
 * Total Accepted:    468.7K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums1 = [1,3], nums2 = [2]
 * 输出：2.00000
 * 解释：合并数组 = [1,2,3] ，中位数 2
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums1 = [1,2], nums2 = [3,4]
 * 输出：2.50000
 * 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums1 = [0,0], nums2 = [0,0]
 * 输出：0.00000
 *
 *
 * 示例 4：
 *
 *
 * 输入：nums1 = [], nums2 = [1]
 * 输出：1.00000
 *
 *
 * 示例 5：
 *
 *
 * 输入：nums1 = [2], nums2 = []
 * 输出：2.00000
 *
 *
 *
 *
 * 提示：
 *
 *
 * nums1.length == m
 * nums2.length == n
 * 0
 * 0
 * 1
 * -10^6
 *
 *
 *
 *
 * 进阶：你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？
 *
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 let findMedianSortedArrays = (nums1, nums2) => {
  if(nums1.length > nums2.length) [nums1, nums2] = [nums2,nums1];
  let m = nums1.length,
      n = nums2.length,
      totalLeft = Math.ceil((m + n)/2);
  
  let l = 0, r = m;
  while(l < r){
      let i = Math.ceil((l + r)/2)
      let j = totalLeft - i;
      if(nums1[i - 1] > nums2[j]){
          r = i - 1;
      }else{
          l = i;
      }
  }
  
  let i = l, j = totalLeft - i; // 找到该分割线的下标
  let l1 = i == 0 ? -Infinity : nums1[i - 1];
      l2 = j == 0 ? -Infinity : nums2[j - 1];
      r1 = i == m ? Infinity : nums1[i];
      r2 = j == n? Infinity : nums2[j];

return ((m + n) & 1) ? Math.max(l1,l2) : (Math.max(l1,l2) + Math.min(r1,r2))/2 
}


// @lc code=end
