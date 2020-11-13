var selection = document.querySelector(".selection");
var dropdown = document.querySelector(".dropdown");
var rbs = document.querySelectorAll("input[name='filter']");
var filterText = document.querySelector(".filter-text");

function filterThingy (event) {
  if(event.target == selection) {
     dropdown.classList.toggle("open");
  } else if(event.target != selection) {
     dropdown.classList.remove("open");
  }
}

function filterChange (event) {
   for(i=0; i< rbs.length; i++) {
      if(event.target == rbs[i]) {
        filterText.innerHTML = rbs[i].value;
        if(dropdown.classList.contains("open")) {
            dropdown.classList.remove("open");
        }
      }
   }
}

window.addEventListener("click", filterThingy, false);
window.addEventListener("change", filterChange, false);
