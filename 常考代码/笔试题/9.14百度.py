# s = input()
import collections
count = collections.defaultdict(int)
# n = len(s)
# if n <= 1:
#     print(0) 
s = 'aaaa'

for c in s:
    count[c]+=1
avg = sum(count.values()) // len(count)
res = 0
for val in count.values():
    res += abs(avg - val)
print(res)