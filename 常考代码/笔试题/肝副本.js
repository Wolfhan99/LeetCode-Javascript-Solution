/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param timeSchedule string字符串二维数组 
 * @return int整型
 * 
 * [["10:00","12:00"],["03:00","11:30"],["11:30","14:00"]]
 * 
 * 
 * 
 */



let str = [["10:00", "12:00"], ["03:00", "11:30"], ["11:30", "14:00"]]
/* for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < str[0].length; j++) {
    str[i][j] = Number(str[i][j].split(":").join(""));
  }
}
console.log(str); */


function countMaxActivity(timeSchedule) {
  // write code here

  for (let i = 0; i < timeSchedule.length; i++) {
    for (let j = 0; j < timeSchedule[0].length; j++) {
      timeSchedule[i][j] = Number(timeSchedule[i][j].split(":").join(""));
    }
  }
  let count = 0, had = [];
  timeSchedule.sort((a, b) => a[1] - b[1]); // 排序,先结束的排前面
  for (let i = 0, len = timeSchedule.length; i < len; i++) {
    let [start, end] = timeSchedule[i];
    for(let j = start; j <=end; j++){
      if(had[j] === undefined){
        had[j] = 1;
        count++;
        break;
      }
    }
  }
  return count-1;
}
console.log(countMaxActivity(str));
// countMaxActivity(str)
