function door(events) {
  events = events.split('');
  console.log(events);
  var code = 0;
  var state = 0;
  var codeDoor = [];
  for (var i = 0; i < events.length; i++) {

    if ( events[i] === '.' ) {
      if ( state == 1 ) {
        code = code--;
      }

      if ( state == -1 ) {
        code = code++;
      }

    }

    if (events[i] === 'P') {

      if ( state == 0 ){
        //could go to ++ or --
        state = 1;
        code = code++;
      }

      if ( state == 1) {
        state = 0;
        //maintain code
      }

      if ( state == -1 ) {
        state = 0;
        code = code++;
      }
    }

    if (events[i] === 'O') {
      state = -1;
      code = code--;
    }

    codeDoor.push(code);

  }

  return codeDoor.toString();
}

console.log(door("P......P......"));
