def shell_sort(nums):
    n = len(nums)
    # 初始化步长
    gap = n // 2
    while gap > 0:
        # 按步长来进行插入排序
        for i in range(gap,n):
            j = i
            # 插入排序
            while j >= gap and nums[j-gap] > nums[j]:
                nums[j-gap],nums[j] = nums[j],nums[j-gap]
                j-=gap
        gap = gap // 2
    return nums
import random
data = [random.randint(-100, 100) for _ in range(10)]
print(data)
shell_sort(data)
print(data)
# data1 = [i for i in range(10)]
# random.shuffle(data1)
# print(data1)

# print('previous:{},\nafter:{}'.format(data, shell_sort(data)))