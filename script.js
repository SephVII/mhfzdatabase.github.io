window.addEventListener("DOMContentLoaded", function () {
    var dropdownParents = document.querySelectorAll("nav ul li");
    for (var i = 0; i < dropdownParents.length; i++) {
      dropdownParents[i].addEventListener("mouseover", function () {
        var dropdown = this.querySelector("ul.dropdown");
        if (dropdown) {
          closeAllDropdowns();
          dropdown.style.display = "block";
        }
      });
    }
  
    function closeAllDropdowns() {
      var dropdowns = document.querySelectorAll("nav ul ul.dropdown");
      for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].style.display = "none";
      }
    }
  });
  