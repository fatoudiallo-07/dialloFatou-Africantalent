let btn = document.querySelector("#btn")
btn.addEventListener("click",()=>{
  document.body.classList.toggle("bg");
})
btn.addEventListener("click",() => {
  document.body.classList.toggle("dark");
  if(document.body.classList.toggle("dark")) {
    localStorage.setItem("theme","dark");
  } else{
     localStorage.setItem("theme","light");
  }
});
window.addEventListener("scroll",() => {
  let navbar =document.querySelector(".navbar");
  if(window.scrollY > 50){
    navbar.classList.add("scrolled");
  }else {
    navbar.classList.remove("scrolled");
  }
});

window.addEventListener("scroll",() => {
  if(window.scrollY > 200){
    document.getElementById("topbtn").style.display="block";
  }else{
     document.getElementById("topbtn").style.display="none";
  }

});
 document.getElementById("topbtn").addEventListener("click" ,() =>{
  window.scrollTo({
    top:0,
    behavior:"smooth"

  })
 })

 let elements = document.querySelectorAll(".fade-in");
 window.addEventListener("scroll" , ()  => {
  elements.forEach(el => {
    let position = el.getBoundingClientRect().top;
    if(position < window.innerHeight){
      el.classList.add("show")
    }
    
  });

  });

   document.addEventListener("DOMContentLoaded", () => {
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll(".counter").forEach((counter) => {
          let target = parseInt(counter.getAttribute("data-target"));
          let count = 0;
          let update = () => {
            count++;
            counter.innerHTML = count;
            if (count < target) setTimeout(update, 20);
          };
          update();
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });
  
  
  const section = document.querySelector(".stats-section");
  if (section) observer.observe(section);
  
});

let form = document.querySelector("form");

form.onsubmit = (e)=>{

    let nom = form.querySelector("#nom").value;
    let prenom = form.querySelector("#prenom").value;
    let message= form.querySelector("#message").value;

    // Supprime les anciens messages
    let erreurs = document.querySelectorAll(".erreur");
    erreurs.forEach(erreur => erreur.remove());

    if(nom.length < 3){
        e.preventDefault();

        let pa = document.createElement("p");
        pa.innerText = "Le nom doit contenir minimum 3 caracteres";
        pa.style.color = "red";
        pa.className = "erreur";

        form.querySelector("#nom").after(pa);
    }

    if(prenom.length < 3){
        e.preventDefault();

        let pa = document.createElement("p");
        pa.innerText = "Le prénom doit contenir minimum 3 caracteres";
        pa.style.color = "red";
        pa.className = "erreur";

        form.querySelector("#prenom").after(pa);
        

        }
 if(message.length < 20){
        e.preventDefault();

        let pa = document.createElement("p");
        pa.innerText = "Le message doit contenir minimum 20 caractères";
        pa.style.color = "red";
        pa.className = "erreur";

        form.querySelector("#message").after(pa);

        let valide = true;

    // tes validations ...

    if(nom.length < 3){
        e.preventDefault();
        valide = false;
    }

    if(prenom.length < 3){
        e.preventDefault();
        valide = false;
    }

    if(message.length < 20){
        e.preventDefault();
        valide = false;
    }

    if(!regexEmail.test(email)){
        e.preventDefault();
        valide = false;
    }

    if(valide){
        let pa = document.createElement("p");
        pa.innerText = "Votre message a été envoyé avec succès !";
        pa.style.color = "green";
        form.appendChild(pa);
    }

        }


    }
    let email = form.querySelector("#email").value;
let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
form.onsubmit = (e)=>{


if(!regexEmail.test(email)){
    e.preventDefault();

    let pa = document.createElement("p");
    pa.innerText = "Veuillez saisir une adresse email valide";
    pa.style.color = "red";
    pa.className = "erreur";

    form.querySelector("#email").after(pa);
}


}








const formselect = document.getElementById("form-select");
const row = document.querySelectorAll(".card");

if (formselect) {

    formselect.addEventListener("change", () => {

        const selectedCategory = formselect.value;

        row.forEach(card => {

            if (
                selectedCategory === "all" ||
                card.dataset.category === selectedCategory
            ) {

                card.style.display = "flex";

            } else {

                card.style.display = "none";

            }

        });

    });

}


  
  
