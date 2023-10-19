const navbar = document.getElementsByTagName("nav")[0];

window.addEventListener("scroll", () =>{
    let scroll_position = window.scrollY
console.log(scroll_position)

  if(scroll_position > 560){
    navbar.classList.replace('bg-transparent', 'nav-color')
  }else if (scroll_position < 560){
    navbar.classList.replace('nav-color', 'bg-transparent')
  }
});
