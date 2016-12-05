var foodCounter = 0;

var CharizardX = 250;
var CharizardY = 0;

function randomNumber(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

document.addEventListener("keydown", function(e) {
  if(e.keyCode == 37){
    CharizardX -=15;
 document.getElementById("Charizard").setAttribute("x", CharizardX)

  }
  else if(e.keyCode == 39){
        CharizardX +=15;
 document.getElementById("Charizard").setAttribute("x", CharizardX)
  }

  else if(e.keyCode == 40){
        CharizardY +=15;
 document.getElementById("Charizard").setAttribute("y", CharizardY)
  }

  else if(e.keyCode == 38){
        CharizardY -=15;
 document.getElementById("Charizard").setAttribute("y", CharizardY)
  }

  var Food1X=Number(document.getElementById("Food1").getAttribute("x"));
   var Food1y=Number(document.getElementById("Food1").getAttribute("y"));
   var Food2X=Number(document.getElementById("Food2").getAttribute("x"));
   var Food2y=Number(document.getElementById("Food2").getAttribute("y"));

  //checking for overlap
    if (CharizardX > Food1X && CharizardX < Food1X + 20 && CharizardY > Food1y && CharizardY < Food1y + 20) {
      console.log('overlap');
      var randX = randomNumber(40, 760)
      document.getElementById("Food1").setAttribute("x", randX)
      foodCounter = foodCounter +1;
      document.getElementById("text1").textContent = foodCounter;
    }

    if (CharizardY > Food2y && CharizardY < Food2y + 20 && CharizardY > Food2y && CharizardY < Food2y + 20){
      console.log('overlap');
      var randX = randomNumber(40, 760)
      document.getElementById("Food2").setAttribute("x", randX)
      foodCounter = foodCounter +1;
      document.getElementById("text1").textContent = foodCounter;
    }


})
