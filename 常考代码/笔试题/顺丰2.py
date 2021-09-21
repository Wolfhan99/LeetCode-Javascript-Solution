# 小明小时候生病的时候打针次数比较多，所以他在学数学的时候，看到1就感觉很厌恶，
# 回想起不堪回首的经历。他很讨厌很多1的数字，更严重的是，
# 如果一个数字x可以通过一些11,111,1111,11111,…，相加得到，那么小明也会很讨厌这个数字。
# 例如：22=11+11, 122=111+11, 111111233=111111111+111+11
# 那么小明就会讨厌22，122，111111233。现在给你一些数字，你知道小明一共讨厌其中多少个数字么？
n = int(input())
nums = list(map(int,input().split()))




def isHateNumber(num):
    flag = False
    i = 0
    while i*111 <= num:
        if i > 11:
            break
        if (num - i * 111) % 11 == 0:
            flag = True
            break
        i+=1
    return flag
