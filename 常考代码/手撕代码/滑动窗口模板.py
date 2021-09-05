import collections


def slidingWindow(s: str, t: str):
    need = collections.defaultdict(int)
    window = collections.defaultdict(int)

    for ch in s:
        need[ch] += 1

    left, right = 0, 0
    valid = 0
    while(right < len(s)):
        # c是将移入窗口的字符
        c = s[right]
        # 右移窗口
        right += 1
        # 进行窗口数据的一系列更新
        # ... 待进行的操作
    '''
        debug输出的位置：
    '''
    print("window:[%d,%d]", left, right)

'''
    # 判断左侧窗口是否要收缩
    while window needs shrink：
        # d是将移除窗口的字符
        d = s[left]
        # 左移窗口
        left += 1
        # 进行窗口内数据的一系列更新
        # ... 待进行的操作

'''

'''

其中两处 ... 表示的更新窗口数据的地方，到时候你直接往里面填就行了。

而且，这两个 ... 处的操作分别是右移和左移窗口更新操作，等会你会发现它们操作是完全对称的。

'''
    

   