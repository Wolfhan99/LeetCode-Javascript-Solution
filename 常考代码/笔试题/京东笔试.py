def csort(a,b):
    if a[0] == b[0]:
        return 
def minimalPower(arr):
    arr.sort(key = lambda a: a[0])
    gainPower = 0
    maxPower = max([item[0] for item in arr])
    minPower = min([item[0] for item in arr])
    needPower = 0
    for i in range(len(arr)-1): # 能获得的战斗力应该排除战斗力最强boss所能获得的战斗力
        gainPower +=arr[i][1]
    # 如果能够获得的战斗力已经大于最大的战斗力，则初始战斗力只需要为最小的战斗力
    if gainPower >= maxPower:
        needPower = minPower
    # 如果获得的战斗力不大于最大的战斗力，则需要补齐,且需要和最小战斗力进行比较，选取更大的那个
    elif gainPower < maxPower:
        needPower = maxPower - gainPower if maxPower - gainPower >= minPower else minPower
    return needPower

arr = [[1000,100], [100,100],[200,700]]

print(minimalPower(arr))