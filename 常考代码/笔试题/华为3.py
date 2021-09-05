
# If you need to import additional packages or classes, please import here.

def func():
    m = int(input())
    n = int(input())
    arr = []
    for _ in range(m):
        line = list(map(int, input().strip().split(" ")))
        arr.append(line)
        
    def helper(arr, m, n):
        res = 0
        dp = [[0 for _ in range(n)] for _ in range(m)]
        dp[0][0] = arr[0][0]
        # print(dp)
        for i in range(1, m):
            dp[i][0] = arr[i-1][0] + arr[i][0]
        for j in range(1, n):
            dp[0][j] = arr[0][j] + arr[0][j-1]
        
        for i in range(1, m):
            for j in range(1, n):
                dp[i][j] = arr[i][j] + min(dp[i-1][j], dp[i][j-1])
                if arr[i][j] == 0: 
                    res = dp[i][j]
        return res               

    arr = [[0,1,0,1],[1,0,2,0],[0,1,0,0]]
    m = 3
    n = 4
    print(helper(arr, m, n))  



 
    # please define the python3 input here. For example: a,b = map(int, input().strip().split())
    # please finish the function body here.
    # please define the python3 output here. For example: print().0
    

if __name__ == "__main__":
    func()
