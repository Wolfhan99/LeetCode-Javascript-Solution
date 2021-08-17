// var line = readline();
// let line = "long aaaa[10][10][10],b,c";
let line = "char aaaa[1000][10],b,c";

const tp = line.split(" ")[0]; // 类型
const tpMap = new Map();
tpMap.set("long", 8);
tpMap.set("int", 4);
tpMap.set("char", 1);
const str = line.split(" ")[1]; // 处理字符串
let num = tpMap.get(tp); // 取出类型对应的字节数
let sum = 0;
let regex = /\[[0-9]*\]/g; // 匹配中括号中的数字

strArr = str.split(","); // 字符串
for (let item of strArr) {
  if (item.includes("[")) {
    let res = item.match(regex);
    let count = 1;

    for (let item of res) {
      item = item.substring(1, item.length - 1);
      count *= Number(item);
    }
    sum += count * num;
  } else {
    sum += num;
  }
}
console.log(sum);

let testCase1 = "long aaaa[10][10][10],b,c";

