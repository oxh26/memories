let myImage = document.querySelector(".card")[0];

myImage.addEventListener("touch", function () {
  myImage.classList.add("cardHover cardHoverBefore");
});

myImage.addEventListener("touchEnd", function () {
  myImage.classList.remove("cardHover cardHoverBefore");
});
