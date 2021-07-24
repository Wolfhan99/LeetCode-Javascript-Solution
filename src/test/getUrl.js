
function
  parse_url(url) {
  var pattern = /(\w+)=(\w+)/ig;// i:不区分大小写  g:全局
  var parames = {};
  url.replace(pattern, function (a, b, c) {
    parames[b] = c;
  });
  console.log(parames);
}

var url = 'http://www.xxx.com?a=1&b=2&c=3';
parse_url(url);
