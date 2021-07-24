function quickSort(array, start, end) {

  let length = array.length;

  // 如果不是数组或者数组长度小于等于1，直接返回，不需要排序 
  if (!Array.isArray(array) || length <= 1 || start >= end) return;

  let index = partition(array, start, end); // 将数组划分为两部分，并返回右部分的第一个元素的索引值

  quickSort(array, start, index - 1); // 递归排序左半部分
  quickSort(array, index + 1, end); // 递归排序右半部分
}


function partition(array, start, end) {

  let pivot = array[start]; // 取第一个值为枢纽值，获取枢纽值的大小


  // 当 start 等于 end 指针时结束循环
  while (start < end) {

    // 当 end 指针指向的值大等于枢纽值时，end 指针向前移动
    while (array[end] >= pivot && start < end) {
      end--;
    }

    // 将比枢纽值小的值交换到 start 位置
    array[start] = array[end];

    // 移动 start 值，当 start 指针指向的值小于枢纽值时，start 指针向后移动
    while (array[start] < pivot && start < end) {
      start++;
    }

    // 将比枢纽值大的值交换到 end 位置，进入下一次循环
    array[end] = array[start];
  }

  // 将枢纽值交换到中间点
  array[start] = pivot;

  // 返回中间索引值
  return start;
}


// arr = [4,5,7,8,1,2,3,6];
arr = [8,7,6,5,4,3,2,1];
quickSort(arr,0, arr.length-1)