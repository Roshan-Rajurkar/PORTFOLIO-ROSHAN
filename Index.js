// Dark Mode and White Mode
const toggle = document.getElementById("toggle_image");
const moon = "./assest/moon.png";
const sun = "./assest/sun.png";
const header = document.getElementsByTagName("header");
// console.log(header);
function changeMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  if (document.body.className == "dark-mode") {
    toggle.src = moon;
  } else {
    toggle.src = sun;
  }
  toggle.style.transition = "all .6s ease-in";
}


