var mergeTwoLists = function(a, b) {
  if(a === null){
    return b;
  }
  if(b === null){
    return a;
  }

  if(a.val < b.val){
    a.next = mergeTwoLists(a.next, b);
    return a;
  }else if(a.val >= b.val)
  {
    b.next = mergeTwoLists(a, b.next);
    return b;
  }

};