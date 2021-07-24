var compressString = function(S) {
  let result = ''
  let index = 0
  //记录字符出现次数，默认为1
  let count = 1
  while(index < S.length){
      //如果当前字符不等于下一个字符，则停止当前字符的计数，统计到result中，否则计数+1
      if(S[index] !== S[index + 1] && count >= 2){
          result += S[index] + count
          //当前字符计数完成后 重置计数为默认值
          count = 1
      }else if(S[index] !== S[index + 1] && count === 1)
      {
          result += S[index]
      }else{
        count++;
      }
       index++
  }
  return result
};

arr = 'shopeew'
arr1= 'aabcccccaaa'
console.log(compressString(arr1));