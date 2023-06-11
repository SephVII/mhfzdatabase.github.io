window.addEventListener("DOMContentLoaded", function () {
    var dropdowns = document.getElementsByClassName("dropdown");
    for (var i = 0; i < dropdowns.length; i++) {
      var subcategories = dropdowns[i].querySelectorAll("li");
      for (var j = 0; j < subcategories.length; j++) {
        if (j !== 0) {
          subcategories[j].style.display = "none";
        }
      }
      dropdowns[i].parentNode.addEventListener("mouseover", function () {
        this.querySelector("ul.dropdown").style.display = "block";
      });
      dropdowns[i].parentNode.addEventListener("mouseout", function () {
        this.querySelector("ul.dropdown").style.display = "none";
      });
    }
  });
  
  