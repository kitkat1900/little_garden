function pullDown() {

  const homeBtn = document.getElementById("home-btn");
  const categoryBtn = document.getElementById("category-btn");
  const glossaryBtn = document.getElementById("glossary-btn");
  const qBtn = document.getElementById("q-btn");
  const headerUserBtn = document.getElementById("header-user-btn");
  const signupBtn = document.getElementById("signup-btn");
  const loginBtn = document.getElementById("login-btn");
  const logoutBtn = document.getElementById("logout-btn");
  const commentBtn = document.getElementById("article-show-comment-btn");
  const pullDown = document.getElementById("pull-down");
  const pullDown2 = document.getElementById("pull-down2");
  const pullDown3 = document.getElementById("pull-down3");
  const pullDown4 = document.getElementById("pull-down4");
  const pullDown5 = document.getElementById("pull-down5");
  const pullDown6 = document.getElementById("pull-down6");
  const pullDown7 = document.getElementById("pull-down7");
  const pullDown8 = document.getElementById("pull-down8");
  const pullDown9 = document.getElementById("pull-down9");
  
  homeBtn.addEventListener('mouseenter', function() {
    if (pullDown.getAttribute("style") == "display:block;") {
      pullDown.removeAttribute("style", "display:block;");
    } else {
      pullDown.setAttribute("style", "display:block;");
    }
    console.log(pullDown9);
  });
  homeBtn.addEventListener('mouseleave', function() {
    if (pullDown) {
      pullDown.removeAttribute("style", "display:block;");
    }
  });

  categoryBtn.addEventListener('mouseenter', function() {
    if (pullDown2.getAttribute("style") == "display:block;") {
      pullDown2.removeAttribute("style", "display:block;");
    } else {
      pullDown2.setAttribute("style", "display:block;");
    }
  });
  categoryBtn.addEventListener('mouseleave', function() {
    if (pullDown2) {
      pullDown2.removeAttribute("style", "display:block;");
    }
  });

  glossaryBtn.addEventListener('mouseenter', function() {
    if (pullDown3.getAttribute("style") == "display:block;") {
      pullDown3.removeAttribute("style", "display:block;");
    } else {
      pullDown3.setAttribute("style", "display:block;");
    }
  });
  glossaryBtn.addEventListener('mouseleave', function() {
    if (pullDown3) {
      pullDown3.removeAttribute("style", "display:block;");
    }
  });

  qBtn.addEventListener('mouseenter', function() {
    if (pullDown4.getAttribute("style") == "display:block;") {
      pullDown4.removeAttribute("style", "display:block;");
    } else {
      pullDown4.setAttribute("style", "display:block;");
    }
  });
  qBtn.addEventListener('mouseleave', function() {
    if (pullDown4) {
      pullDown4.removeAttribute("style", "display:block;");
    }
  });

  if (logoutBtn) {
  headerUserBtn.addEventListener('mouseenter', function() {
    if (pullDown5.getAttribute("style") == "display:block;") {
         pullDown5.removeAttribute("style", "display:block;");
    } else {
          pullDown5.setAttribute("style", "display:block;");
    }
  });
  headerUserBtn.addEventListener('mouseleave', function() {
    if (pullDown5) {
      pullDown5.removeAttribute("style", "display:block;");
    }
  });
  logoutBtn.addEventListener('mouseenter', function() {
    if (pullDown6.getAttribute("style") == "display:block;") {
         pullDown6.removeAttribute("style", "display:block;");
    } else {
          pullDown6.setAttribute("style", "display:block;");
    }
  });
  logoutBtn.addEventListener('mouseleave', function() {
    if (pullDown6) {
      pullDown6.removeAttribute("style", "display:block;");
    }
  });
 } else {
  signupBtn.addEventListener('mouseenter', function() {
    if (pullDown7.getAttribute("style") == "display:block;") {
        pullDown7.removeAttribute("style", "display:block;");
     } else {
         pullDown7.setAttribute("style", "display:block;");
    }
  });
  signupBtn.addEventListener('mouseleave', function() {
     if (pullDown7) {
       pullDown7.removeAttribute("style", "display:block;");
    }
  });

  loginBtn.addEventListener('mouseenter', function() {
    if (pullDown8.getAttribute("style") == "display:block;") {
         pullDown8.removeAttribute("style", "display:block;");
    } else {
        pullDown8.setAttribute("style", "display:block;");
    }
   });
  loginBtn.addEventListener('mouseleave', function() {
    if (pullDown8) {
       pullDown8.removeAttribute("style", "display:block;");
    }
   });

   commentBtn.addEventListener('mouseenter', function() {
    if (pullDown9.getAttribute("style") == "display:block;") {
         pullDown9.removeAttribute("style", "display:block;");
    } else {
        pullDown9.setAttribute("style", "display:block;");
    }
   });
  commentBtn.addEventListener('mouseleave', function() {
    if (pullDown9) {
       pullDown9.removeAttribute("style", "display:block;");
    }
   });

 }
};

window.addEventListener('load', pullDown);