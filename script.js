window.addEventListener("DOMContentLoaded", function () {
    var dropdownParents = document.querySelectorAll("nav ul li");
    for (var i = 0; i < dropdownParents.length; i++) {
      dropdownParents[i].addEventListener("mouseover", function () {
        this.querySelector("ul.dropdown").style.display = "block";
      });
      dropdownParents[i].addEventListener("mouseout", function () {
        this.querySelector("ul.dropdown").style.display = "none";
      });
    }
  });
  
  