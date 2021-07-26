/* 

  直接插入排序基本思想是每一步将一个待排序的记录，插入到前面已经排好的有序序列当中去，
  直到查完所有的元素为止，

  插入排序核心：扑克牌思想，就想着自己在打扑克牌，接起来一张，
  放哪里无所谓，再接起来一张，比第一张小，放左边， 
  继续接，可能是中间数，就插在中间....依次
  时间复杂度为O(n2)
*/

function insertSort(array) {

  let length = array.length;

  // 如果不是数组或者数组长度小于等于1，直接返回，不需要排序 
  if (!Array.isArray(array) || length <= 1) return;

  // 循环从 1 开始，0 位置为默认的已排序的序列
  for (let i = 1; i < length; i++) {
    let temp = array[i]; // 保存当前需要排序的元素
    let j = i;

    // 在当前已排序序列中比较，如果比需要排序的元素大，就依次往后移动位置
    while (j - 1 >= 0 && array[j - 1] > temp) {
      array[j] = array[j - 1];
      j--;
    }

    // 将找到的位置插入元素
    array[j] = temp;
  }

  return array;
}


function insertSort2(array) {
  if (!Array.isArray(array) || length <= 1) return;
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < array[j - 1]) {
      swap(array, j, j - 1);
      j--;
    }
  }
}

function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

arr = [3, 6, 7, 8, 9, 1, 2, 4, 5];
insertSort2(arr);
console.log(arr)