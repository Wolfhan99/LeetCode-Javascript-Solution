var line;
line = readline().split(",").map((item) => Number(item));
let column = line[0];
let row = line[1];
const grid = new Array(column).fill(0).map(() => new Array(row).fill(0));
for (let i = 0; i < column.length; i++) {
  line = readline().split(",");
  for (let j = 0; j < row.length; j++) {
    grid[i][j] = line[j];
  }
}

let res = numIslands(grid);
console.log(res);

function numIslands(grid) {
  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        helper(grid, i, j);
        res++;
      }
    }
  }
  return res;
};

function helper(grid, i, j) {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[O].length || grid[i][j] !== '1') {
    return;
  }
  grid[i][j] = "2";
  helper(grid, i + 1, j);
  helper(grid, i - 1, j);
  helper(grid, i, j + 1);
  helper(grid, i, j - 1);
}
