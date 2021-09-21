# n = int(input())
hashFive2Ten = {'o': 0, 'y': 1, 'e': 2, 'a': 3, 's': 4}
hashTen2Five = {0: 'o', '1': 'y', '2': 'e', '3': 'a', '4': 's'}
res2 = ''
res1 = 0
def helper(num, res1, res2):
    if num.isdigit():  # 十进制转五进制
        num = int(num)
        while num > 5:
            res2 += str(num % 5)
            num = num // 5
        res2 += str(num)
        r = ''
        for c in res2:
            if c in hashTen2Five:
                r += hashTen2Five[c]
        return r[::-1]
    else:  # 五进制转十进制
        for i in range(len(num)):
            res1 += hashFive2Ten[num[i]] * (5 ** (len(num)-i-1))
        return res1

# for i in range(n):
#     res2 = ''
#     res1 = 0
#     num = input()
#     res = helper(num, res1, res2)
#     print(res)


num = '3958'
res1 = 0
res = helper(num, res1, res2)
print(res)
