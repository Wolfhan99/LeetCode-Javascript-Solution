# def merge(left, right):
#     l, r= 0, 0
#     res = []
#     while l < len(left) and r < len(right):
#         if left[l] < right[r]:
#             res.append(left[l])
#             l+=1
#         else:
#             res.append(right[r])
#             r+=1
#     res.append(left[l:])
#     res.append(right[r:])
#     return res
def merge(left, right):
    l, r = 0, 0
    result = []
    while l < len(left) and r < len(right):
        if left[l] < right[r]:
            result.append(left[l])
            l += 1
        else:
            result.append(right[r])
            r += 1
    result.append(left[l:])
    result.append(right[r:])
    return result

def merge_sort(alist):
    if len(alist) <= 1:
        return
    num = len(alist) / 2
    # 划分
    left = merge_sort(alist[:num])
    right = merge_sort(alist[num:])
    # 合并
    return merge(left, right)

    
import random
data = [random.randint(-100, 100) for _ in range(10)]
merge_sort(data)