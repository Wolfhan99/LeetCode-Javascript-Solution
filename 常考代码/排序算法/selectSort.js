/* 
* 选择排序:

选择排序的基本思想为每一趟从待排序的数据元素中选择最小（或最大）的一个元素作为首元素
直到所有元素排完为止。

在算法实现时，每一趟确定最小元素的时候会通过不断地比较交换来使得首位置最小，
交换是个比较耗时的操作。
其实，很容易发现的是，在还未完全确定当前最小元素之前，这些交换都是无意义的。
我们可以通过设置一个变量min， 每一次比较仅存储较小元素的数组下标，当这轮循环结束后，
那这个变量存储的就是当前最小元素的下标，此时再执行交换操作。
时间复杂度：O(n2)

*/

function selectSort(array) {

  let length = array.length;

  // 如果不是数组或者数组长度小于等于1，直接返回，不需要排序 
  if (!Array.isArray(array) || length <= 1) return;

  for (let i = 0; i < length - 1; i++) {

    let minIndex = i; // 设置当前循环最小元素索引

    for (let j = i + 1; j < length; j++) {

      // 如果当前元素比最小元素索引，则更新最小元素索引
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }

    // 交换最小元素到当前位置
    // [array[i], array[minIndex]] = [array[minIndex], array[i]];
    swap(array, i, minIndex);
  }

  return array;
}

// 交换数组中两个元素的位置
function swap(array, left, right) {
  var temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}