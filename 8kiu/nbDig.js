function nbDig(n, d) {
  d = d.toString();
  var countDigit = 0;
  for (var i = 0; i <= n; i++) {
    var square = i * i;
    square = square.toString();
    var pattern = new RegExp(d,'g');
    countDigit = (square.match(pattern) || []).length + countDigit;
  }
  return countDigit;
}
