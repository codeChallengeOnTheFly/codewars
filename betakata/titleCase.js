function titleCase(title, minorWords) {


  minorWords = minorWords.split(" ");
  title = title.split(" ");

  //loop for iterate minorWords
  for ( i = 0; i < title.length; i++) {
    for ( j = 0; j < minorWords.length; j++){

      if(title[i] === minorWords[j]){
          console.log(title[i]);
          break;
        }else{
          console.log(minorWords[i]);
          title[j] = title[j].toLowerCase();
          firstString = title[j].substr(0,1).toUpperCase();
          title[j] = title[j].slice(1);
          title[j] = firstString.concat(title[j]);
          console.log(title[j]);
        }
      }
    }
}

title = "Saulera the best of programmers";
minorWords = "of the";
titleCase(title,minorWords);
