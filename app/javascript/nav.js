function pullDown() {

  const mypageBtn = document.getElementById("mypage-btn");
  const pullDown = document.getElementById("pull-down");
  if (!mypageBtn) return null;
  mypageBtn.addEventListener('click', function() {
    if (pullDown.getAttribute("style") == "display:block;") {
        pullDown.removeAttribute("style", "display:block;");
    } else {
        pullDown.setAttribute("style", "display:block;");
    }
  });

};

window.addEventListener('load', pullDown);