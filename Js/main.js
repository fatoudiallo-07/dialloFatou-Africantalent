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
