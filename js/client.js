'use strict';
const SUNColor = document.querySelector("input[value=SUN]")

const TREEColor = document.querySelector("input[value=TREE]")

const WATERColor = document.querySelector("input[value=WATER]")

const body = document.querySelector('body');


const colorTheme = function() {
  if (SUNColor.checked) {
    body.className = "";
    body.classList.add("SUN-theme")
  } else if (TREEColor.checked) {
    body.className = "";
    body.classList.add("TREE-theme")
  } else {
    body.className = "";
    body.classList.add("WATER-theme")
  }
}

SUNColor.addEventListener("click", colorTheme);
TREEColor.addEventListener("click", colorTheme);
WATERColor.addEventListener("click", colorTheme);