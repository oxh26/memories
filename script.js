document.addEventListener("touchstart", function () {}, false);
(function () {
  $("*")
    .on("touchstart", function () {
      $(this).trigger("hover");
    })
    .on("touchend", function () {
      $(this).trigger("hover");
    });
})();
