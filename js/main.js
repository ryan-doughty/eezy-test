var form = document.getElementById("theForm");
var selection = document.querySelector(".selection");
var dropdown = document.querySelector(".dropdown");
var rbs = document.querySelectorAll("input[name='filter']");
var filterText = document.querySelector(".filter-text");

function filterThingy (event) {
  if(event.target == selection) {
     form.classList.toggle("open");
  } else if(event.target != selection) {
     form.classList.remove("open");
  }
}

function filterChange (event) {
   for(i=0; i< rbs.length; i++) {
      if(event.target == rbs[i]) {
        filterText.textContent = rbs[i].value;
        if(form.classList.contains("open")) {
            form.classList.remove("open");
        }
      }
   }
}

window.addEventListener("click", filterThingy, false);
window.addEventListener("change", filterChange, false);
