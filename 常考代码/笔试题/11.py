def helper(nums, package):
        n = len(nums)
        if n == 0:
            return 0
        transfer1 = 0 #每次转发的数量
        transfer2 = 0 #每次转发的数量
        cache = [0] * n # 缓存的数量
        maxVal = float('-inf')
        flag = 0
        for i in range(n):
            if maxVal < nums[i][0] + nums[i][1]:
                flag = i
                maxVal = nums[i][0] + nums[i][1]
            return flag
        nums.remove(nums[flag])

        # 开始遍历
        for i in range(n):
            if nums[i][0]>=package:
                transfer1 = package
            elif nums[i][0] < package:
                transfer1 = nums[i][0]
                if nums[i][1] > package - nums[0]:
                    cache[i] = package - nums[0]
                else:
                    cache[i] = nums[i][1]
        transfer = 0
        for i in range(n):
            if i == 0:
                if cache[i] >= nums[i][0]:
                    transfer2 = nums[i][0]
                else:
                    transfer2 = cache[i]
            else:
                transfer = max(transfer2 + cache[i], nums[i][0])
        
        res = transfer + transfer1
        return res;
nums = [[50,50],[20,20],[40,10],[30,5],[10,5]]
sendPackage = 100
print(helper(nums,sendPackage))