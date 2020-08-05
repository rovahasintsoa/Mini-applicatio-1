//definir la dimension du tableau

function recuperation(){

  var row = document.getElementById('row').value;
  var col = document.getElementById('column').value;

  var dimension=[]
  dimension.push(row, col);
  return dimension

}

// Creation du tableau à partir de la dimension au-dessus
var elemTd = document.createElement("td");
function creation(){
  var nbrLigne = recuperation()[0];
  var nbrCol = recuperation()[1];

  var elemTable = document.createElement("table");
  var div1 = document.getElementById('div1');
  var counter = 0;


  for (var i = 0; i < nbrLigne; i++) {
    var elemTr = document.createElement("tr")

    for (var j = 0; j < nbrCol; j++) {
      elemTd = document.createElement("td");
      elemTr.appendChild(elemTd);
    }
    elemTable.appendChild(elemTr);
  }
  div1.appendChild(elemTable);
}



function  remove() {
    while (div1.firstChild) {
        div1.removeChild(div1.firstChild);
    }
}

function ajouter(){
  remove();
  recuperation();
  creation();
}


// choix du couleur
var color = "none";
  document.getElementById('box1').onclick = function(){
    color = "red"
    return color;
  }

document.getElementById('box2').onclick = function(){
    color = "green"
    return color;
  }
  document.getElementById('box3').onclick = function(){
    color = "black"
    return color;
  }
  document.getElementById('box4').onclick = function(){
    color = "violet"
    return color;
  }

// cibler l'element clicke et change sa couleur de fond
function background(e){
  e.target.style.background = color;
}

document.getElementById('div1').addEventListener('click', background, false);
