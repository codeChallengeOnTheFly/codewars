function door(events) {
  events = events.split('');
  console.log(events);
  var code = 0;
  var state = 0;
  var codeDoor = [];
  for (var i = 0; i < events.length; i++) {
    console.log(events[i]);

    if ( events[i] === '.' ) {
      if ( state == 1 ) {
        code = code < 5 ? code + 1 : code = 5;
      }

      if ( state == -1 ) {
        code = code > 0 ? code - 1 : code = code;
      }

    }

    if (events[i] === "P") {
      console.log(i);

      console.log("PUSH");
      console.log(state);

      if ( state == 0 ){
        console.log("Inital State: " + state);
        if (code == 5) {
          state = -1;
          code = code > 0 ? code - 1 : code = code;
        }else if (code < 5) {
          state = 1;
          code = code < 5 ? code + 1 : code = 5;
        }
      }
      else if ( state == 1) {
        console.log("its been here at state one");

        if (code == 5) {
          state = -1;
          code = code > 0 ? code - 1 : code = code;
        }else if (code < 5) {
          state = 0;
        }
        console.log("State: " + state);
      }
      else if ( state == -1 ) {
        console.log("its been here");
        if (code == 5) {
          state = 0;
          code = code > 0 ? code - 1 : code = code;
        }else if (code < 5) {
          state = 0;
        }
        console.log("State Negative" + state);
      }
      console.log("Final State: " + state);
    }

    if (events[i] === 'O') {
      if (state == 1) {
        state = -1;
        code = code > 0 ? code - 1 : code = code;
      }else if(state == -1){
        state = 1;
        code = code < 5 ? code + 1 : code = 5;
      }
    }
    codeDoor.push(code);
  }

  codeDoor = codeDoor.toString()
  while (codeDoor.search(",") > 0) {
      codeDoor = codeDoor.replace(",", "");
  }
  return codeDoor;
}

//console.log(door("P......P......"));
console.log(door('P..OP..P..'));
