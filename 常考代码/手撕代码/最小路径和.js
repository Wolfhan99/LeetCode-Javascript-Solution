function findMin(mapArray) {
  // write code here
  let w = mapArray[0].length,
    h = mapArray.length;
  if (w === 0 || h === 0) return 0;

  for (let i = 1; i < h; i++) {
    mapArray[i][0] += mapArray[i - 1][0];
  }
  for (let i = 1; i < w; i++) {
    mapArray[0][i] += mapArray[0][i - 1];
  }
  for (let i = 1; i < h; i++) {
    for (let j = 1; j < w; j++){
      mapArray[i][j] += Math.min(mapArray[i-1][j], mapArray[i][j-1]);
    }
  }
  return mapArray[h-1][w-1];

}