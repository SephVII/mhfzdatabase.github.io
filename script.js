window.addEventListener("DOMContentLoaded", function () {
    var dropdowns = document.getElementsByClassName("dropdown");
    for (var i = 0; i < dropdowns.length; i++) {
      var dropdown = dropdowns[i];
      var subcategories = dropdown.querySelectorAll("li");
      for (var j = 0; j < subcategories.length; j++) {
        subcategories[j].style.display = "none";
      }
  
      dropdown.parentNode.addEventListener("mouseover", function () {
        var subcategories = this.querySelector("ul.dropdown").querySelectorAll("li");
        for (var j = 0; j < subcategories.length; j++) {
          subcategories[j].style.display = "block";
        }
      });
      dropdown.parentNode.addEventListener("mouseout", function () {
        var subcategories = this.querySelector("ul.dropdown").querySelectorAll("li");
        for (var j = 0; j < subcategories.length; j++) {
          subcategories[j].style.display = "none";
        }
      });
    }
  });
  
  