//Recuperation des élément avec DOM
const nom = document.querySelectorAll(".img h2");
const commentaire = document.querySelectorAll(".img span");

//Le texte à afficher
const name_p = "Ben's Luzolo";
const commentaire_p = "Happy birthday";

//Afficher les texte dans le site
for(let i = 0; i < nom.length; i++){
    nom[i].value = name_p;
    nom[i].innerText = `${name_p}`;
}
for (let i = 0; i <  commentaire.length; i++) {
    commentaire.value = commentaire_p;
    commentaire[i].innerText = `${commentaire_p}`
}