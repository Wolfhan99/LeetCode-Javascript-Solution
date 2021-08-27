# arr = [[0]*i for i in range(5) in range(3)] 


#  多维数组的初始化
arr_two_demension = [ [0] * 3 for i in range(4)]

arr_three_demension = [[ [0] * 3 for i in range(3)] for i in range(3)]

import itertools

result = list(map(list, itertools.permutations([1,2,3])))
a = lambda x: x+1

def dictionairy():  
 
    # 声明字典
    key_value ={}     
 
    # 初始化
    key_value[2] = 56       
    key_value[1] = 2 
    key_value[5] = 12 
    key_value[4] = 24
    key_value[6] = 18      
    key_value[3] = 323 
 
 
    print ("按值(value)排序:")   
    print(sorted(key_value.items(), key = lambda kv:(kv[1], kv[0])))     
    print(key_value)

arr = [x-1 for x in range(10,1,-1)]
arr2 = sorted(arr)
arr.reverse()


