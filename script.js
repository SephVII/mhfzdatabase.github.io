window.addEventListener("DOMContentLoaded", function () {
    var dropdowns = document.getElementsByClassName("dropdown");
    for (var i = 0; i < dropdowns.length; i++) {
      dropdowns[i].addEventListener("mouseover", function () {
        this.children[0].style.display = "block";
      });
      dropdowns[i].addEventListener("mouseout", function () {
        this.children[0].style.display = "none";
      });
    }
  });
  