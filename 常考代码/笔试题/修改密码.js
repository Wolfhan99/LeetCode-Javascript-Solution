// let passwd = readline();
let passwd = "a!jjjdeiejdwj1";
const n = passwd.length;
let res = 0;

isEnoughLong(passwd);
passwordCheck(passwd);

console.log(res);

function isEnoughLong(s) {
  if (s.length < 6) {
    res += 6 - s.length;
  } else if (s.length > 20) {
    res += 20 - s.length;
  }
}

function passwordRepeatTest(s) {
  // 返回重复字符串需要检测多少次
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === s[i]) {
      // 两个数字相等需要相加
      repeat++;
    }
  }
  repeat = parseInt(repeat / 2);
  return repeat;
}

function passwordCheck(s) {
  let digit = 0;
  let upper = 0;
  let lower = 0;
  let symbol = 0;
  let flag = false; // 标记相邻两个字母是否相等
  const symbolCharCode = [",", ".", "?", ";"].map((item) => item.charCodeAt(0));

  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === s[i] && flag === false) {
      // 两个数字相等需要相加
      res++;
      flag = true; // 表示前面两个字母相等
    } else {
      flag = false;
    }
    if (s[i].charCodeAt(0) >= "a".charCodeAt(0) && s[i].charCodeAt(0) <= "z") {
      lower++;
    } else if (
      s[i].charCodeAt(0) >= "A".charCodeAt(0) &&
      s[i].charCodeAt(0) <= "Z"
    ) {
      upper++;
    } else if (
      s[i].charCodeAt(0) > "0".charCodeAt(0) &&
      s[i].charCodeAt(0) <= "9"
    ) {
      digit++;
    } else if (symbolCharCode.includes(s[i].charCodeAt(0))) {
      symbol++;
    }
  }
  if (lower + upper + digit + symbol < n) {
    res += n - (lower + upper + digit + symbol);
  }
  return res;
}
