/* 

寻找一个数(基本的二分搜索)

*/

function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1; // 注意
  while (left <= right) {// 注意
    let mid = (left + right) >> 1;
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else if (nums[mid] > target) right = mid - 1;
  }
  return left;
}

/* 
为什么while循环中的条件是<=,而不是<?
答：因为初始化right的赋值是nums.length - 1，即最后一个元素的索引，而不是nums.length。

这二者可能出现在不同功能的二分查找中，区别是：
前者相当于两端都闭区间[left, right]，后者相当于左闭右开区间[left, right)，因为索引大小为nums.length是越界的。

我们这个算法中使用的是前者[left, right]两端都闭的区间。这个区间其实就是每次进行搜索的区间。

*/



/**
 *
    寻找左侧边界的二分搜索

 */

// 写法1
function leftBound(nums, target) {
  if (nums.length === 0) return -1;
  let left = 0;
  let right = nums.length; // 注意
  while (left < right) {
    let mid = (left + right) >> 1;
    if (nums[mid] === target) right = mid;
    else if (nums[mid] < target) {
      left = mid + 1; // 注意
    }
    else if (nums[mid] > target) {
      right = mid; // 注意
    }
  }
  return left;
}

/* 
分析:
为什么while中是<而不是<=?
因为right = nums.length而不是nums.length - 1。因此每次循环的「搜索区间」是[left, right)左闭右开。

while(left < right)终止的条件是left == right，此时搜索区间[left, left)为空，所以可以正确终止。


  为什么left = mid + 1，right = mid？和之前的算法不一样？

答：这个很好解释，因为我们的「搜索区间」是[left, right)左闭右开，所以当nums[mid]被检测之后，
下一步的搜索区间应该去掉mid分割成两个区间，即[left, mid)或[mid + 1, right)。
*/

//写法2:统一模板
function leftBound2(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) { //此时越界条件为left == right + 1;
    let mid = left + mid >> 1;
    if (nums[mid] === target) right = mid - 1;
    else if (nums[mid] > target) right = mid - 1;
    else if (nums[mid] < target) left = mid + 1;
  }
  if(left >= nums.length || nums[left] !== target) return -1;
  return left;
}

// 写法1:

function rightBound(nums, target) {
  let left = 0;
  let right = nums.length; //注意
  while (left < right) {
    let mid = (left + right) >> 1;
    if (nums[mid] === target) left = mid + 1; // 注意
    else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid;
    }
  }
  return left - 1;
}


/*
为什么最后返回left - 1而不像左侧边界的函数，返回left？而且我觉得这里既然是搜索右侧边界，应该返回right才对。

答：首先，while 循环的终止条件是left == right，所以left和right是一样的，你非要体现右侧的特点，返回right - 1好了。

*/

// 写法2:

function rightBound(nums, target) {
  let left = 0;
  let right = nums.length - 1; //注意
  while (left <= right) {  //越界条件为 left == right + 1;
    let mid = (left + right) >> 1;
    if (nums[mid] === target) left = mid + 1; // 注意
    else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  return right;
}
