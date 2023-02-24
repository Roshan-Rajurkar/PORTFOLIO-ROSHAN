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

// email using email.js
function sendMail() {
  var params = {
    name: document.getElementById("myname").value,
    email: document.getElementById("myemail").value,
    message: document.getElementById("mymessage").value,
  };

  const serviceId = "service_ubng6e9";
  const templateId = "template_nzi7psu";

  // sending email
  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      document.getElementById("myname").value = "";
      document.getElementById("myemail").value = "";
      document.getElementById("mymessage").value = "";
      console.log(res);
      alert("Your message sent successfully.");
    })
    .catch((err) => {
      console.log("Check msg");
    });
}
