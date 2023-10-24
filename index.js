const navbar = document.getElementsByTagName("nav")[0];

window.addEventListener("scroll", () => {
  let scroll_position = window.scrollY;
  console.log(scroll_position);

  if (window.matchMedia("(max-width: 680px)")) {
    navbar.classList.replace("bg-transparent", "nav-color");
  } else {
    if (scroll_position > 550) {
      navbar.classList.replace("bg-transparent", "nav-color");
    } else if (scroll_position < 550) {
      navbar.classList.replace("nav-color", "bg-transparent");
    }
  }
});
