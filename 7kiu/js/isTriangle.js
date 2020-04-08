function isTriangle(a,b,c)
{
  var max = Math.max(a,b,c);
  var sum = a + b + c;
  return sum - max > max;
}
