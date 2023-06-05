$(document).ready(function () {
  let homenav = document.getElementById("home-nav");
  let resnav = document.getElementById("res-nav");
  let busnav = document.getElementById("bus-nav");
  let neighbornav = document.getElementById("neighbor-nav");
  homenav.addEventListener("click", navSwitch, false);
  resnav.addEventListener("click", navSwitch, false);
  busnav.addEventListener("click", navSwitch, false);
  neighbornav.addEventListener("click", navSwitch, false);
  homenav.classList.add("active");
});

function navSwitch(e) {
  let current = document.getElementsByClassName("active");
  console.log(e.target.id);
  if (e.target.id === "home-nav") {
    current[0].classList.remove("active");
    let homenav = document.getElementById("home-nav");
    homenav.classList.add("active");
  }
  if (e.target.id === "res-nav") {
    current[0].classList.remove("active");
    let resnav = document.getElementById("res-nav");
    console.log(current[0], resnav);
    resnav.classList.add("active");
  }
  if (e.target.id === "bus-nav") {
    current[0].classList.remove("active");
    let busnav = document.getElementById("bus-nav");
    busnav.classList.add("active");
  }
  if (e.target.id === "neighbor-nav") {
    current[0].classList.remove("active");
    let neighbornav = document.getElementById("neighbor-nav");
    neighbornav.classList.add("active");
  }
}
