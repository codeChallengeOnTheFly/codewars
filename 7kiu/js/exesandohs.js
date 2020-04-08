function XO(str) {

str = str.split('');

var o = 0;
var x = 0;

for (var i = 0; i < str.length; i++){

 o = str[i] === 'o' || str[i] === 'O' ? o+1 : o+0;

 x = str[i] === 'x' || str[i] === 'X' ? x+1 : x+0;
}

 return o == x ? true : false;
}
