function pullDown() {

  const categoryBtn = document.getElementById("category-btn");
  const categories = document.getElementById("categories");

  categoryBtn.addEventListener('mouseup', function() {
    if (categories.getAttribute("style") == "display:block;") {
      categories.removeAttribute("style", "display:block;");
    } else {
      categories.setAttribute("style", "display:block;");
    }
  });

};

window.addEventListener('load', pullDown);