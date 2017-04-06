function palindrome(num) {
  if(num < 0 || isNaN(num) || typeof num !== 'number'){
    return "Not valid";
  }else {
    num = num.toString().split('');
    for (var i = 0, j = num.length -1; i < num.length; i++, j--) {      
      if(num[i] != num[j]){
        return false;
      }
    }
    return true;
  }
}
palindrome(123321);
