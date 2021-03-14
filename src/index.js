module.exports = function reverse (n) {
  var num="";
  for (var i=n.length-1;i>=0;i--)
    {
      num += n[i];
    }
  return num;
}
