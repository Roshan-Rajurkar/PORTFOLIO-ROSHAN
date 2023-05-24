// Dark Mode and White Mode
const toggle = document.getElementById("toggle_image");
const moon = "./assest/moon.png";
const sun = "./assest/sun.png";
let headerC = document.getElementsByTagName("header");

// function changeHeaderAndFooter(header) {

//   console.log("I also Execute");
// }

function changeMode() {
  var element = document.body;
  element.classList.toggle("bright-mode");
  if (document.body.className == "bright-mode") {
    toggle.src = sun;
    document.body.style.color = "#454545";
  } else {
    toggle.src = moon;
    document.body.style.color = "white";
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


// Making payment alert
function makePayment() {
  setTimeout(() => {
    alert("Make sure to Donate");
  }, 2000);
}