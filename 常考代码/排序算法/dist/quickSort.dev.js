"use strict";

/* 

快速排序，重点
思想：
通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的数据还要小
然后再按此方法对这两部分数据分别进行快速排序，整个过程可以递归进行，以此达到整个数据变成有序序列

思路：
首先将第一个位置的数组作为枢纽值，
然后end指针向前移动，当遇到比枢纽值小的值或者end值等于start的值的时候停止，然后将这个值填入start的位置，
然后start指针向后移动，当遇到比枢纽值大的值或者start的值等于end值的时候停止，然后将这个值填入end的位置；
反复循环这个过程，指导start的值等于start的值位置。
将一开始保留的枢纽值填入这个位置，此时枢纽值左边的值都比枢纽值小，右边的值都比枢纽值大。
然后递归左右两边的序列

*/
function quickSort(array, start, end) {
  var length = array.length; // 如果不是数组或者数组长度小于等于1，直接返回，不需要排序 

  if (!Array.isArray(array) || length <= 1 || start >= end) return;
  var index = partition(array, start, end); // 将数组划分为两部分，并返回右部分的第一个元素的索引值

  quickSort(array, start, index - 1); // 递归排序左半部分

  quickSort(array, index + 1, end); // 递归排序右半部分
}

function partition(array, start, end) {
  var pivot = array[start]; // 取第一个值为枢纽值，获取枢纽值的大小
  // 当 start 等于 end 指针时结束循环

  while (start < end) {
    // 当 end 指针指向的值大等于枢纽值时，end 指针向前移动
    while (array[end] >= pivot && start < end) {
      end--;
    } // 将比枢纽值小的值交换到 start 位置


    array[start] = array[end]; // 移动 start 值，当 start 指针指向的值小于枢纽值时，start 指针向后移动

    while (array[start] < pivot && start < end) {
      start++;
    } // 将比枢纽值大的值交换到 end 位置，进入下一次循环


    array[end] = array[start];
  } // 将枢纽值交换到中间点


  array[start] = pivot; // 返回中间索引值

  return start;
} // arr = [4,5,7,8,1,2,3,6];


arr = [8, 7, 6, 5, 4, 3, 2, 1].sort(function () {
  return 0.5 - Math.random();
});
console.log(quickSortVersion2(arr));

function quickSortVersion2(arr) {
  // 4. 结束递归（当arr小于等于第一项，则不用处理）
  if (arr.length <= 1) return arr; // 1.找到数组的中间项，在原有的数组中把它移除

  var middleIndex = Math.floor(arr.length / 2);
  var middle = arr.splice(middleIndex, 1)[0]; // 2.准备左右两个数组，循环剩下数组中的每一项，比当前项小的放到左边数组中，反之放到右边数组中

  var leftArr = [],
      rightArr = [];

  for (var i = 0; i < arr.length; i++) {
    var current = arr[i];
    current < middle ? leftArr.push(current) : rightArr.push(current);
  } // 3. 递归方式让左右两边的数组持续这样处理，一直左右两边都排好序为止


  return quickSortVersion2(leftArr).concat(middle, quickSortVersion2(rightArr));
}