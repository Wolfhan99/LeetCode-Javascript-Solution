const tempArr = [];
function getChildDom(dom){
  [...dom.children].forEach(v => {
    tempArr.push(v);
    getChildDom(v);
  })
  return tempArr;
}