function sign(number){
  if (!isNaN(number)) {
    if( number == 0 )
      return 0;

    if( number > 0 )
      return 1;

    if( number < 0 )
      return -1;
    }else {
    return NaN;
  }
}


sign(12);
sign("hello");
sign(NaN);
sign(-3);
