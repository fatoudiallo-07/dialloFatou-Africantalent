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
