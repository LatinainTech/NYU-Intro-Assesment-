// Obtain the img element, and assign it to the image variable
let image = document.querySelector("img")

// Obtain the 'shrink-grow' button, and assign it to the changeSize variable
let changeSize = document.querySelector("shrink-grow")

//DO NOT CHANGE THE FOLLOWING CODE
changeSize.addEventListener("click", function() {
  if (image.style.height == "100px") {
    image.style.height = "25px"
  }
  else {
    image.style.height = "100px"
  }
})