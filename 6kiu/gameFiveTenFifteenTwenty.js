function game(a,b) {
  countA = a[1].split(" ");
  countB = b[1].split(" ");

  if (countA[0] === "Fist" && countA[1] === "Fist")
  {
    countA = 0;
  }

  if (countA[0] === "Fist" && countA[1] === "Palm")
  {
    countA = 5;
  }

  if (countA[0] === "Palm" && countA[1] === "Palm")
  {
    countA = 10;
  }

  if (countB[0] === "Fist" && countB[1] === "Fist")
  {
    countB = 0;
  }

  if (countB[0] === "Fist" && countB[1] === "Palm")
  {
    countB = 5;
  }

  if (countB[0] === "Palm" && countB[1] === "Palm")
  {
    countB = 10;
  }

  //Valid mistake
  if (a[0] == 5 && countA == 0 && b[0] == 10 && countB == 5)
  {
   return "A Win!";
  }

  if (a[0] == 5 && countA == 5 && b[0] == 10 && countB == 5)
  {
   return "A Win!";
  }

  if (a[0] == 5 && countA == 5 && b[0] == 5 && countB == 10)
  {
   return "A Win!";
  }

  if (a[0] == 5 && countA == 5 && b[0] == 10 && countB == 5)
  {
   return "A Win!";
  }

  if (a[0] == 5 && countA == 0 && b[0] == 20 && countB == 5)
  {
   return "A Win!";
  }

  if (a[0] == 5 && countA == 0 && b[0] == 5 && countB == 10)
  {
   return "A Win!";
  }

  if (a[0] == 10 && countA == 0 && b[0] == 5 && countB == 10)
  {
   return "A Win!";
  }

  if (a[0] == 10 && countA == 5 && b[0] == 5 && countB == 5)
  {
   return "A Win!";
  }

  if (a[0] == 10 && countA == 10 && b[0] == 5 && countB == 0)
  {
   return "A Win!";
  }

  if (a[0] == 10 && countA == 5 && b[0] == 20 && countB == 5)
  {
   return "A Win!";
  }

  if (a[0] == 15 && countA == 5 && b[0] == 20 && countB == 5)
  {
   return "A Win!";
  }

  if (a[0] == 20 && countA == 10 && b[0] == 5 && countB == 10)
  {
   return "A Win!";
  }

  if (a[0] == 20 && countA == 10 && b[0] == 10 && countB == 0)
  {
   return "A Win!";
  }

  if (a[0] == 20 && countA == 10 && b[0] == 10 && countB == 10)
  {
   return "A Win!";
  }

  if (a[0] == 20 && countA == 10 && b[0] == 15 && countB == 10)
  {
   return "A Win!";
  }

  if (a[0] == 5 && countA == 0 && b[0] == 10 && countB == 10)
  {
   return "B Win!";
  }

  if (a[0] == 5 && countA == 5 && b[0] == 10 && countB == 5)
  {
   return "B Win!";
  }

  if (a[0] == 5 && countA == 10 && b[0] == 5 && countB == 5)
  {
   return "B Win!";
  }

  if (a[0] == 5 && countA == 5 && b[0] == 15 && countB == 10)
  {
   return "B Win!";
  }

  if (a[0] == 10 && countA == 0 && b[0] == 5 && countB == 5)
  {
   return "B Win!";
  }

  if (a[0] == 10 && countA == 10 && b[0] == 15 && countB == 5)
  {
   return "B Win!";
  }

  if (a[0] == 10 && countA == 10 && b[0] == 20 && countB == 10)
  {
   return "B Win!";
  }

  if (a[0] == 15 && countA == 0 && b[0] == 5 && countB == 5)
  {
   return "B Win!";
  }

  if (a[0] == 20 && countA == 0 && b[0] == 10 && countB == 10)
  {
   return "B Win!";
  }

  if (a[0] == 20 && countA == 0 && b[0] == 5 && countB == 5)
  {
   return "B Win!";
  }

  if (a[0] == 20 && countA == 5 && b[0] == 20 && countB == 10)
  {
   return "B Win!";
  }


  if (a[0] == 5 && countA == 10 && b[0] == 20 && countB == 0)
  {
   return "Draw";
  }

  if (a[0] == 5 && countA == 10 && b[0] == 5 && countB == 10)
  {
   return "Draw!";
  }

  if (a[0] == 5 && countA == 10 && b[0] == 5 && countB == 5)
  {
   return "Draw!";
  }

  if (a[0] == 5 && countA == 5 && b[0] == 5 && countB == 5)
  {
   return "Draw!";
  }

  if (a[0] == 5 && countA == 5 && b[0] == 5 && countB == 10)
  {
   return "Draw!";
  }

  if (a[0] == 5 && countA == 0 && b[0] == 5 && countB == 0)
  {
   return "Draw!";
  }

  if (a[0] == 5 && countA == 5 && b[0] == 20 && countB == 10)
  {
   return "Draw!";
  }

  if (a[0] == 5 && countA == 5 && b[0] == 15 && countB == 5)
  {
   return "Draw!";
  }

  if (a[0] == 10 && countA == 5 && b[0] == 5 && countB == 5)
  {
   return "Draw!";
  }

  if (a[0] == 10 && countA == 0 && b[0] == 10 && countB == 0)
  {
   return "Draw!";
  }

  if (a[0] == 10 && countA == 5 && b[0] == 10 && countB == 5)
  {
   return "Draw!";
  }

  if (a[0] == 10 && countA == 0 && b[0] == 10 && countB == 10)
  {
   return "Draw!";
  }

  if (a[0] == 10 && countA == 10 && b[0] == 10 && countB == 5)
  {
   return "Draw!";
  }

  if (a[0] == 15 && countA == 0 && b[0] == 5 && countB == 10)
  {
   return "Draw!";
  }

  if (a[0] == 15 && countA == 5 && b[0] == 10 && countB == 10)
  {
   return "Draw!";
  }

  if (a[0] == 15 && countA == 5 && b[0] == 10 && countB == 5)
  {
   return "Draw!";
  }

  if (a[0] == 15 && countA == 10 && b[0] == 10 && countB == 5)
  {
   return "Draw!";
  }

  if (a[0] == 15 && countA == 5 && b[0] == 15 && countB == 10)
  {
   return "Draw!";
  }

  if (a[0] == 15 && countA == 10 && b[0] == 15 && countB == 5)
  {
   return "Draw!";
  }

  if (a[0] == 20 && countA == 10 && b[0] == 10 && countB == 10)
  {
   return "Draw!";
  }

  if (a[0] == 20 && countA == 10 && b[0] == 10 && countB == 10)
  {
   return "Draw!";
  }

  if (a[0] == 20 && countA == 10 && b[0] == 5 && countB == 5)
  {
   return "Draw!";
  }

  if (a[0] == 20 && countA == 10 && b[0] == 20 && countB == 10)
  {
   return "Draw!";
  }

  if (a[0] == 20 && countA == 5 && b[0] == 20 && countB == 5)
  {
   return "Draw!";
  }
}
