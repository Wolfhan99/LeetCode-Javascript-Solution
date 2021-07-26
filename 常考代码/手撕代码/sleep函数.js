// 方式1： ES5
/* 

function sleep(callback, time) {
  if(typeof callback == 'function'){
    setTimeout(callback, time);
  }
}

function output(){
  console.log(111);
}

sleep(output, 2000);

 */


//方式2： 使用promise


/* 

const sleep = (time) => {
  return new Promise((resolve)=>{
    setTimeout(resolve, time);
  })
}

sleep(2000).then(() => {
  console.log(111);
}) 

*/


// 利用async
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
}

async function init() {
  var temp = await sleep(2000)
  console.log(111);
}

init();