function door(events) {
  events = events.split('');
  var code = 0;
  var state = 0;
  var obstacle = 0;
  var codeDoor = [];
  var stateRecord = [];
  for (var i = 0; i < events.length; i++) { 

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
          stateRecord.push(state);
          code = code > 0 ? code - 1 : code = code;
        }else if (code < 5) {

          console.log("Pause code minus 5");
          console.log("Code : " + code);
          console.log("CodeDoor :" + codeDoor);
          console.log("StateRecord : " + stateRecord);
          console.log("StateRecord : " + stateRecord.length);
          console.log(stateRecord[stateRecord.length -1]);

          if (obstacle == 1 && code > 0 && stateRecord[stateRecord.length - 2] == 1 ) {
            console.log("obstacle before");
            state = -1;
            code = code > 0 ? code - 1 : code = code;
            stateRecord.push(state);
          }else {
            console.log("No obstacle before");
            state = 1;
            stateRecord.push(state);
            code = code < 5 ? code + 1 : code = 5;

          }
        }
      }
      else if ( state == 1) {
        console.log("its been here at state one");

        if (code == 5) {
          state = -1;
          stateRecord.push(state);
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
          stateRecord.push(state);
          code = code > 0 ? code - 1 : code = code;
        }else if (code < 5) {
          state = 0;
        }
        console.log("State Negative" + state);
      }
      console.log("Final State: " + state);
    }

    if (events[i] === 'O') {
      obstacle = 1;
      if (state == 1) {
        state = -1;
        stateRecord.push(state);
        code = code > 0 ? code - 1 : code = code;
      }else if(state == -1){
        state = 1;
        stateRecord.push(state);
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
