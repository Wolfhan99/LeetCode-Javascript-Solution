function TeamNums(height) {
  // write code here
  let n = height.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if((height[i] < height[j] && height[j]< height[k]) || 
        (height[i] > height[j] && height[j] > height[k])
        ){
          ans++;
        }
      }
    }
  }
  return ans;
}
