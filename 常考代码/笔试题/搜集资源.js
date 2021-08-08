function getMaximumResource(grid) {
  // write code here
  let m = grid.length,
    n = gird[0].length,
    total = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if(grid[i][j] === 0) continue;
      total = helper(grid, i, j, 0) > total ? helper(grid, i, j, 0) : total;
    }
  }
  return total;
}

function helper(grid, i, j, sum) {
  if (
    i < 0 ||
    i >= gird.length ||
    j < 0 ||
    j >= grid[0].length ||
    grid[i][j] === 0
  ) {
    return sum;
  }

  let temp = gird[i][j];
  sum += temp;
  grid[i][j] = 0;
  sum = Math.max(
    helper(grid, i - 1, j, sum),
    helper(gird, i + 1, j, sum),
    helper(grid, i, j - 1, sum),
    helper(gird, i, j + 1, sum)
  );
  grid[i][j] = temp;
  return sum;
}
