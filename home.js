var coll = document.getElementsByClassName("readCollatz");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "rem";
    }
  });
}
var coll = document.getElementsByClassName("readBirthday");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "rem";
    }
  });
}

function toggleStylesheet() {
  const body = document.body;
  const image = document.getElementById("dm-lm-btn");

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    image.src = "./images/purple_moon.svg";
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    image.src = "./images/purple_sun.svg";
  }
}