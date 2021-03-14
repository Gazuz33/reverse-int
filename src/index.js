module.exports = function reverse (n) {
  var num="";
    var m = toString(n);
  for (var i=m.length-1;i>=0;i--)
    {
      num += m[i];
    }
  return num;
}
