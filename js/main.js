var form = document.getElementById("theForm");
var selection = document.querySelector(".selection");
var dropdown = document.querySelector(".dropdown");
var rbs = document.querySelectorAll("input[name='filter']");
var filterText = document.querySelector(".filter-text");

function filterThingy (event) {
    console.log(event.target);
  if(event.target == form) {
     form.classList.toggle("open");
  } else if(event.target != form) {
     form.classList.remove("open");
  }
}

function initFilter (event) {
    //do stuff
    var rb1 = document.querySelector("input[name='filter']:first-child");
    rb1.checked = true;
    if(rb1.checked) {
        filterText.textContent = rb1.value;
        rb1.parentNode.classList.add("checked");
    }
    
}

function filterChange (event) {
   for(i=0; i< rbs.length; i++) {
      if(event.target == rbs[i] || event.target == rbs[i].parentNode) {
        rbs[i].parentNode.classList.add("checked");
        filterText.textContent = rbs[i].value;
        if(form.classList.contains("open")) {
            form.classList.remove("open");
        }
      }  else {
          rbs[i].parentNode.classList.remove("checked");
      }
   }
}


window.addEventListener("load", initFilter, false);
window.addEventListener("click", filterThingy, false);
window.addEventListener("change", filterChange, false);


