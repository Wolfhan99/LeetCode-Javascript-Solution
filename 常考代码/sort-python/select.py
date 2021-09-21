""" 选择排序的思路是：第一轮的时候，所有的元素都和第一个元素进行比较，如果比第一个元素大，就和第一个元素进行交换，
在这轮比较完后，就找到了最小的元素；第二轮的时候所有的元素都和第二个元素进行比较找出第二个位置的元素，以此类推。
"""

def select_sort(alist):
    size = len(alist)
    for i in range(size-1):
        for j in range(i+1, size-1):
            if alist[j] > alist[i]:
                alist[j], alist[i] = alist[i], alist[j]