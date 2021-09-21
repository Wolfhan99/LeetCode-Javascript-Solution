def helper(arr):
    count = dict()
    for num in arr:
        if num in count:
            count[num]+=1
        else:
            count[num] = 1
    res = []
    for item in sorted(count.items(),key=lambda d:d[1],reverse=True):
        if  max(count.values()) == item[1]:
            res.append(item[0])
        else:
            break
    return res


arr = [1,2,3,2,2,4,1,1]
print(helper(arr))