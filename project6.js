var CharizardX = 250;
var CharizardY = 0;

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
})

var Food1X=Number(document.getElementById("Food1").getAttribute("x"));
 var Food1y=Number(document.getElementById("Food1").getAttribute("y"));
 var Food2X=Number(document.getElementById("Food2").getAttribute("x"));
 var Food2y=Number(document.getElementById("Food2").getAttribute("y"));
