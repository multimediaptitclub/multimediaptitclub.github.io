/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
	var navbar=document.getElementById("navbar");
  if (prevScrollpos >= currentScrollPos) {
    navbar.classList.add("navbarplus"); navbar.classList.remove("navbarminus");
  } 
	else {
    navbar.classList.add("navbarminus");
	navbar.classList.remove("navbarplus");
  }
  prevScrollpos = currentScrollPos;
}