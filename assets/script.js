/* --------Dark mode toggle code---------*/


const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".darkmode");

      modeToggle.addEventListener("click" , () =>{
          modeToggle.classList.toggle("active");
          body.classList.toggle("dark");
          
      });



/* --------Mobile menu code---------*/


const mobileMenu = document.getElementById('mobile-menu');

function toggleMenu() {
    const nav = document.getElementById('nav'); 
    nav.classList.toggle('active');
    
}



mobileMenu.addEventListener('click', toggleMenu);

      

  /* --------Section scroll code---------*/

const menuItems = document.querySelectorAll('#menu a, #header a[href^="#"]');

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  
	 window.scroll({
	 top: to,
	 behavior: "smooth",
	 })
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget)- 200;
	scrollToPosition(to);
}

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});
  