function whichBusToTake(busesColors, goingToSchool) {
    beforeLastBlue = 0;
    lastBlue = 0;
    token = false;
    for (var i = 0; i < busesColors.length; i++) {
        if (busesColors[i] === "red" && goingToSchool[i]) {
            return i;
        } else if (goingToSchool[i]) {
            if(!token){
              beforeLastBlue = i;
              token = true;
            }else {
              lastBlue = i;
            }
        }
    }
    return beforeLastBlue;
}
