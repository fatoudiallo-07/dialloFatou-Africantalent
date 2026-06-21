let btn = document.querySelector("#btn")//on selectionne l'id btn puis on lui ajoute un ecouteur d'evenement pour quand on clique la couleur change//
btn.addEventListener("click",()=>{
  document.body.classList.toggle("bg");
})
btn.addEventListener("click",() => {     // On ajoute un deuxième événement au même clic du bouton//
  document.body.classList.toggle("dark");
  if(document.body.classList.toggle("dark")) { //si le mode dark est activer on le sauvgarde dans lS//
    localStorage.setItem("theme","dark");
  } else{//sinon  on  sauvgarde light dans lS//
     localStorage.setItem("theme","light");
  }
});

window.addEventListener("scroll",() => { // On ajoute un événement sur le window pour quand on scroll//
  let navbar =document.querySelector(".navbar");//on selectionne l'id navbar//
  if(window.scrollY > 50){//si window est scrolle jusqua etre superieur 50px on ajoute le scrolled styliser dans le CSS dans le navbar//
    navbar.classList.add("scrolled");
  }else {//sinon on le supprime//
    navbar.classList.remove("scrolled");
  }
});

window.addEventListener("scroll",() => {  //On ajoute un ecouteur d'événement sur le window pour quand on scroll//
  if(window.scrollY > 200){ //si window est scrolle jusqua etre superieur 200px on recupere l'id du boutton apres on lui rajoute un style de faire en sorte quil soit en block//
    document.getElementById("topbtn").style.display="block";
  }else{//sinon on lui applique un style none pour le cachait//
     document.getElementById("topbtn").style.display="none";
  }

});
 document.getElementById("topbtn").addEventListener("click" ,() =>{ //on selectionne l'id top btn puis pn lui ajoute un ecouteur d'evenenment//
  window.scrollTo({ //la page va remonter jusqu'en haut avec un effet smooth//
    top:0,
    behavior:"smooth"

  })
 })

 let elements = document.querySelectorAll(".fade-in");//on selectionne tout les id avec fade-in je lui rajoute unecouteur d'evenement//
 window.addEventListener("scroll" , ()  => {
  elements.forEach(el => {//pour chaque page scroller si l'element est visible dans la fenetre je luis ajoute le show CSS//
    let position = el.getBoundingClientRect().top;
    if(position < window.innerHeight){
      el.classList.add("show")
    }
    
  });

  });

   document.addEventListener("DOMContentLoaded", () => {
  
  const observer = new IntersectionObserver((entries) => { //on cree un observateur qui surveille l'apparition d'un element dans l'ecran//
    entries.forEach(entry => {
      if (entry.isIntersecting) { //on parcourt chaque element surveille//
        document.querySelectorAll(".counter").forEach((counter) => {//je selectionne tout les id avec counter apres je recupere l'attribut data-target//
          let target = parseInt(counter.getAttribute("data-target")); //on recupere le chifre cible stocke dans l'attribut data target et on le transforme en nombre//
          let count = 0; // on initialise a zero//
          let update = () => {
            count++; //on augmente le compteur de 1//
            counter.innerHTML = count;
            if (count < target) setTimeout(update, 20);//si pas encore arrive au but recommence dans 20miliseconde//
          };
          update(); //lance la fontion encore//
        });
        observer.disconnect(); //on deconnete pour arreter la surveillance une fois les compteurs lance//
      }
    });
  }, { threshold: 0.5 });//lelement doit etre visible a 50% pour declencher //
  
  
  const section = document.querySelector(".stats-section");//on cherche la section qui  contient les compteurs
  if (section) observer.observe(section); //si la section existe on surveille avec observateur //
  
});





               

document.addEventListener("DOMContentLoaded", () => {
let form = document.querySelector(".form");

   form.onsubmit=(e) => {

    let nom = form.querySelector("#nom").value; // on declare nom prenom email message puis on selectionne leur id depuis form//
    let prenom = form.querySelector("#prenom").value;
    let email = form.querySelector("#email").value;
    let message = form.querySelector("#message").value;

    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;// on declare une constante regex//

    document.querySelectorAll(".erreur").forEach(erreur => erreur.remove());

    let valide = true;

    if(nom.length < 3){ // si le nom est inferieur a 3 on met un message d'erreur //
        valide = false;

        let pa = document.createElement("p");
        pa.innerText = "Le nom doit contenir minimum 3 caractères";
        pa.style.color = "red";
        pa.className = "erreur";

        form.querySelector("#nom").after(pa);
    }

    if(prenom.length < 3){// si le prenom est inferieur a 3 on met un message d'erreur //
        valide = false;

        let pa = document.createElement("p");
        pa.innerText = "Le prénom doit contenir minimum 3 caractères";
        pa.style.color = "red";
        pa.className = "erreur";

        form.querySelector("#prenom").after(pa); 
    }

    if(!regexEmail.test(email)){//si l'email est incompatible au regex on met un message d'erreur//
        valide = false;

        let pa = document.createElement("p");
        pa.innerText = "Veuillez saisir une adresse email valide";
        pa.style.color = "red";
        pa.className = "erreur";

        form.querySelector("#email").after(pa); // on ajoute tout les pa juste apres la balise contenant l'id //
    }

    if(message.length < 20){ // si le message est inferieur a 320on met un message d'erreur //
        valide = false;

        let pa = document.createElement("p");
        pa.innerText = "Le message doit contenir minimum 20 caractères";
        pa.style.color = "red";
        pa.className = "erreur";

        form.querySelector("#message").after(pa); // on ajoute tout les pa juste apres la balise contenant l'id //
    }

    if(!valide){
        e.preventDefault();
    }
  };


});



  
  




















const selectform = document.getElementById("select-Form");//on selectionne  l'id //et
const row = document.querySelectorAll(".card");//on declare row puis on selectionne tout les id avec card//

if ( selectform) {

     selectform.addEventListener("change", () => {//on ecoute si ya changement dans le menu deroulant//

        const selectedCategory =  selectform.value;

        row.forEach(card => {

            if (// si on selectionne all tout s'affiche si cest les carte on les affiche une par une en ajoutant un disolay block sinon on le cache//
                selectedCategory === "all" ||
                card.dataset.category === selectedCategory
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}














