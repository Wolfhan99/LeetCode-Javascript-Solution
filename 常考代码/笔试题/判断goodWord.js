/* function isGoodWord(word) {
  // write code here
  const arr = new Array(26).fill(0);
  word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    arr[word[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  if (Math.max(...arr) / Math.min(...arr) > 1) return true;
  return false
} */

word = "duozhuayu"
console.log(isGoodWord(word));


function isGoodWord(word) {
  // write code here
  const map = new Map();
  for (const c of word) {
    map.set(c, (map.get(c) || 0) + 1);
  }
  const arr = Array.from(map.values());
  if (Math.max(...arr) % Math.min(...arr) === 0 && Math.max(...arr) > Math.min(...arr)) {
    return true;
  }
  return false
  // const arr = new Array(26).fill(0);
  // word.toLowerCase();
  // for (let i = 0; i < word.length; i++) {
  //   arr[word[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
  // }
  // if(Math.max(...arr) / Math.min(...arr) > 1) return true;
  // return false
}