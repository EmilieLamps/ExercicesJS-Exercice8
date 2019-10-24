function votreAge (){ //déterminer la fonction
let age = document.getElementById("age").value; // récupérer les variables
// la propriété document.document.getElementById("nomVariable").value permet de récuperer les données d'un formulaire
if (age >=18) { //conditions
  alert("Vous êtes majeur"); //Ne pas oublier les guillemets dans la parenthèse alert
  }
else {
  alert("Vous êtes mineur");
  }
}
