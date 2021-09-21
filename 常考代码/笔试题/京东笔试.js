let line = '1000 100'
line = line.split(" ").map(item=>Number(item))

console.log(line)

function minimalPower(arr) {
  n = arr.length;
  arr.sort((a,b)=>{
      if(a[0] == b[0]){
          return b[1] - a[1]
      }else{
          return a[0] - b[0]
      }
  })
  let res = 0;
  for(let i = n-1;i>=0;i--){
      if(i === n-1){
          res = arr[i][0];
          continue;
      }else{
          res = Math.max(res - arr[i][1], arr[i][0]);
      }
  }
  return res;
}


const arr = [[1000, 100], [100, 100], [200, 700],[100,200]];
console.log(minimalPower(arr))