//Recuperation des élément avec DOM
const souhait = document.querySelector(".souhait");
const nom = document.querySelectorAll(".img h2");
const commentaire = document.querySelectorAll(".img span");

//Le texte à afficher
const souhait_p = "Mon amour, celle qui me rend très heureux et me donne la joie de vivre.Je manque souvent de mot mais entre temps mon coeur s'exalte, pour tout exprime je resume tout en un mot 'je t'aime mon amour' Profite bien de ta journée mon seul regret et de n'est pas fêté ça ensemble."
const name_p = "Ben's Luzolo";
const commentaire_p = "Happy birthday";

//Afficher les texte dans le site

souhait.innerText = souhait_p;
for(let i = 0; i < nom.length; i++){
    nom[i].value = name_p;
    nom[i].innerText = `${name_p}`;
}
for (let i = 0; i <  commentaire.length; i++) {
    commentaire.value = commentaire_p;
    commentaire[i].innerText = `${commentaire_p}`
}
