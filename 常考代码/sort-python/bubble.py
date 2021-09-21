""" 冒泡排序
相邻的两个元素进行比较，然后把较大的元素放到后面（正向排序），
在一轮比较完后最大的元素就放在了最后一个位置，
因为这一点像鱼儿在水中吐的气泡在上升的过程中不断变大，所以得名冒泡排序。 """

def bubble_sort(alist):
    size = len(alist)
    for i in range(size-1):
        for j in range(size - i - 1):
            if alist[j] > alist[j+1]:
                alist[j] , alist[j+1] = alist[j+1], alist[j]

import random
data = [random.randint(-100, 100) for _ in range(10)]
bubble_sort(data)
print(data)