var selection = document.querySelector(".selection");
var dropdown = document.querySelector(".dropdown");
var rbs = document.querySelectorAll("input[name='filter']");
var duder = document.querySelector(".duder");

function filterThingy (event) {
  if(event.target == selection) {
     dropdown.classList.toggle("show");
  }
}

function filterChange (event) {
   for(i=0; i< rbs.length; i++) {
      if(event.target == rbs[i]) {
         duder.innerHTML = rbs[i].value;
      }
   }
}

window.addEventListener("click", filterThingy, false);
window.addEventListener("change", filterChange, false);
