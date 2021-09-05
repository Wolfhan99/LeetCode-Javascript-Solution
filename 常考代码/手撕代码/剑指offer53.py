from typing import List
def search(nums: List[int], target: int) -> int:
    if len(nums) == 0:
        return 0
    left, right = 0, len(nums) - 1
    def binarySearch(nums,left,right):
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] < target: # 比目标小，放大
                left = mid + 1
            elif nums[mid] > target: #比目标大，缩小
                right = mid - 1
            else: # 寻找左边界，缩小right
                right = mid - 1
        return left
    index = binarySearch(nums, left, right)
    print(index)
    res = 0
    for i in range(index, len(nums)):
        # print(nums[index], index)
        if nums[i] != target: break
        if nums[i] == target:
            res+=1
    return res
em

nums = [2, 2]
target = 8

print(search(nums, target))

