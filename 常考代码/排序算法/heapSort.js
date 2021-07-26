/* 

堆排序：

基本思想:
将待排序序列构造成一个大顶堆，此时，整个序列的最大值就是堆顶的根节点。
将其与末尾元素进行交换，此时末尾元素就为最大值。
然后将剩余n-1个元素重新构造成一个堆，这样会得到n个元素的次小值。如此反复执行，便能得到一个有序序列了。

建立堆的时间复杂度为 O(n)，排序循环的次数为 n-1，每次调整堆的时间复杂度为 O(logn)，
因此堆排序的时间复杂度在 不管什么情况下都是 O(nlogn)。

堆排序的平均时间复杂度为 O(nlogn) ，最坏时间复杂度为 O(nlogn) ，空间复杂度为 O(1) ，不是稳定排序。


*/

function heapSort(array) {

  let length = array.length;

  // 如果不是数组或者数组长度小于等于1，直接返回，不需要排序
  if (!Array.isArray(array) || length <= 1) {
    return;
  }

  buildMaxHeap(array); // 将传入的数组建立为大顶堆

  // 每次循环，将最大的元素与末尾的元素交换，然后剩下的元素构建为大顶堆
  for (let i = length - 1; i > 0; i--) {
    swap(array, 0, i);
    adjustMaxHeap(array, 0, i) // 将剩下的元素重新构建为大顶堆
  }
  return array;

}


function adjustMaxHeap(array, index, heapSize) {
  let iMax,
    iLeft,
    iRight;
  while (true) {
    iMax = index; // 保存最大值的索引
    iLeft = 2 * index + 1; // 获取左子元素的索引
    iRight = 2 * index + 2; // 获取右子元素的索引

    // 如果左子元素存在，且左子元素大于最大值，则更新最大值索引
    if (iLeft < heapSize && array[iMax] < array[iLeft]) {
      iMax = iLeft;
    }

    // 如果右子元素存在，且右子元素大于最大值，则更新最大值索引
    if (iRight < heapSize && array[iMax] < array[iRight]) {
      iMax = iRight;
    }

    // 如果最大元素被更新了，则交换位置，使父节点大于它的子节点，同时将索引值更新为被替换的值，
    // 继续检查它的子树
    if (iMax !== index) {
      swap(array, index, iMax);
      index = iMax;
    } else {
      // 如果未被更新，说明该子树满足大顶堆的要求，退出循坏
      break;
    }
  }
}
// 构建大顶堆
function buildMaxHeap(array) {
  let length = array.length,
    iParent = parseInt(length >> 1) - 1; // 获取最后一个非叶子点的元素

  for (let i = iParent; i >= 0; i--) {
    adjustMaxHeap(array, i, length); // 循环调整每一个子树，使其满足大顶堆的要求
  }
}

// 交换元素位置
function swap(array, left, right) {
  let temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}