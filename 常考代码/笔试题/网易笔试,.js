var nthUglyNumber = function (n,a,b,c) {
  // 三指针
  const dp = new Array(n + 2).fill(0);
  let p2 = 1,
  p3 = 1,
  p5 = 1;
  const min = Math.min(a,b,c)
  dp[1] = 1;
  for (let i = 2; i < n + 2; i++) {
    const num2 = p2 * a,
      num3 = p3 * b,
      num5 = p5 * c;
  dp[i] = Math.min(num2, num3, num5);
  if(dp[i] === num2) p2++;
  if(dp[i] === num3) p3++;
  if(dp[i] === num5) p5++;
  }
  return dp[n+1]
};

console.log(nthUglyNumber(5,4,5,6))