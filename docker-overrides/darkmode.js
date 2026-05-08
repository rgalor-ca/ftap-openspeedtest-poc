var dayMode;
var nightMode;
var dayModeMob;
var nightModeMob;
var darkStyle;

window.addEventListener("load", changeSkin);

function changeSkin() {
  dayModeMob = document.getElementById("daymode-Mob");
  nightModeMob = document.getElementById("nightmode-Mob");
  dayMode = document.getElementById("daymode");
  nightMode = document.getElementById("nightmode");

  var theme = "dark";
  try {
    theme = new URLSearchParams(window.location.search).get("pocTheme") || "dark";
  } catch (e) {
    theme = "dark";
  }

  setSkin(theme === "light" ? "light" : "dark");
}

function setSkin(theme) {
  if (theme === "dark") {
    setDisplay(dayModeMob, "none");
    setDisplay(nightModeMob, "inline-block");
    setDisplay(dayMode, "none");
    setDisplay(nightMode, "inline-block");

    darkStyle = document.getElementById("darkmode");
    if (darkStyle == null) {
      document.head.innerHTML += '<link id="darkmode" rel="stylesheet" href="assets/css/darkmode.css" type="text/css"/>';
    }
    return;
  }

  setDisplay(nightModeMob, "none");
  setDisplay(dayModeMob, "inline-block");
  setDisplay(nightMode, "none");
  setDisplay(dayMode, "inline-block");

  document.querySelectorAll("#darkmode").forEach(function (style) {
    if (style.parentNode) {
      style.parentNode.removeChild(style);
    }
  });
}

function toggleSkin() {
  setSkin(document.getElementById("darkmode") ? "light" : "dark");
}

function setDisplay(element, value) {
  if (element) {
    element.style.display = value;
  }
}
