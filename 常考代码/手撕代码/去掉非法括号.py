
char1 = '1 2'
char2 = '1 2 4 7 8'
n, k = map(int, input().split())


# nums = list(map(int, input().strip()))
nums = list(map(int, char2.split()))
print(n,k,nums)
def solution(nums,k):
    n = len(nums)
    if n < k:
        return -1
    res = ''
    # 当前第一位的最大数值是
    count = 1
    # 初始位置
    numindex = -1
    for i in range(k): 
        # print(nums[-k+count-1:numindex:-1])
        # print(nums[numindex:-k+count])
        pos = -k + count if -k + count !=0 else len(nums)
        firstMax = max(nums[numindex+1:pos])
        numindex = nums.index(firstMax)
        # 求所在位置的索引
        res += str(firstMax)
        count+=1
    return int(res)
# print(solution(nums, k))


nums1 = [4,6,2,5,4,1,9,8]
nums2 = [1,2]
nums3 = [0,0,0,0,0,0]
k1 = 4
k2 = 2
print(solution(nums1,k1))
        
