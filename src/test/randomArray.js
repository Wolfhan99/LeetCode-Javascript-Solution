function randomSort(a,b){
  return Math.random() > 0.5 ? -1 : 1;
}

function randomSort1(arr){
  let result = [];

  while(arr.length > 0){
    let randomIndex = Math.floor(Math.random() * arr.length);
    result.push(arr[randomIndex]);
    arr.splice(randomIndex, 1);
  }
  return result;
}

function randomSort2(arr){
  let len = arr.length;
  if(!Array.isArray(arr) || len <= 1) return;
  for(let i = 0; i < len-1; i++) {
    let randomIndex = Math.floor(Math.random() * (len - i)) + i;
    [arr[i], arr[randomIndex]] =[arr[randomIndex],arr[i]];
  }  
  return arr;
}


arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(randomSort2(arr));