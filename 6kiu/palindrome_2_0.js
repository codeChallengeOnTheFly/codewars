function palindrome(num,s) {
  var palindromeRange = [];
  var rangeNum;
  if(num < 0 || isNaN(num) || typeof num !== 'number' || typeof s !== 'number' || s < 0 || isNaN(s)){
    return "Not valid";
  }else {
      var k = 0;
       do {
         rangeNum = num;
         rangeNum = rangeNum.toString().split('');
        for (var i = 0, j = rangeNum.length -1; i < rangeNum.length; i++, j--) {
          if(num < 10){
            break;
          }else if (rangeNum[i] != rangeNum[j]) {
            break
          }else{
            if (i == rangeNum.length -1) {
              palindromeRange.push(num);
              k = k + 1;
            }
          }
        }
        num = num + 1;
      }while (k < s);      
      return palindromeRange;
  }
}

palindrome(6,4);
palindrome(101,2);
